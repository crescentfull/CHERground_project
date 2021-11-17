import { inject, injectable } from "inversify";
import { ProductCategoryService } from "..";
import { KeywordDto, ProductCategoryDto } from "../../api/dto";
import { ProductCategoryMapper } from "../../data/mapper/modelMapper";
import { ProductCategoryRepository } from "../../data/repository";

@injectable()
export default class ProductCategoryServiceImpl implements ProductCategoryService {
    private productCategory: ProductCategoryRepository;
    private productCategoryMapper: ProductCategoryMapper;

    constructor (
        @inject('ProductCategoryRepository') productCategory: ProductCategoryRepository,
        @inject('ProductCategoryMapper') productCategoryMapper: ProductCategoryMapper
    ) {
        this.productCategory = productCategory;
        this.productCategoryMapper = productCategoryMapper;
    }

    async getProductCategory(id: string): Promise<ProductCategoryDto> {
        try {
            let productCategory = await this.productCategory.getProductCategory(id);
            return this.productCategoryMapper.convert(productCategory);
        } catch (err) {
            throw err;
        }
    }

    async saveProductCategory(productCategory: ProductCategoryDto[], clearance: boolean): Promise<void | string | undefined> {
        if (clearance === true) {
            for (var value of productCategory) {
                console.log(value)
                let productCategoryInfo = this.productCategoryMapper.revert(value);
                await this.productCategory.saveProductCategory(productCategoryInfo);
            }
        } else {
            return "unauthorized user";
        }
    }

    async updateProductCategory(productCategory: ProductCategoryDto): Promise<string> {
        let productCategoryInfo = this.productCategoryMapper.revert(productCategory);
        await this.productCategory.updateProductCategory(productCategoryInfo)
        return "successfully updated";
    }

    async deleteProductCategory(id: string, clearance: boolean): Promise<string> {
        if (clearance === true) {
            await this.productCategory.deleteProductCategory(id);
            return "successfully deleted";
        } else {
            return "unauthorized user";
        }
    }
}