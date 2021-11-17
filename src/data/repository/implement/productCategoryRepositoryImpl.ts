import { injectable } from "inversify";
import { ProductCategoryRepository } from "..";
import { connection } from "../../connection/connection";
import { OptionsError } from "../../../service/error/error";
import { ProductCategory } from "../../entity/productCategory";

@injectable()
export default class ProductCategoryRepositoryImpl implements ProductCategoryRepository {
    async getProductCategory(id: string): Promise<ProductCategory> {
        const productCategoryRepo = (await connection).getRepository(ProductCategory);
        let productCategory = await productCategoryRepo.findOne({where: {id:id}})

        if(productCategory) {
            return productCategory;
        } else {
            throw OptionsError.UNEXISTING_OPTIONS;
        }
    }

    async updateProductCategory(productCategory: ProductCategory): Promise<void> {
        const productCategoryRepo = (await connection).getRepository(ProductCategory);
        productCategoryRepo.save(productCategory);
    }

    async saveProductCategory(productCategory: ProductCategory): Promise<void> {
        const productCategoryRepo = (await connection).getRepository(ProductCategory);
        await productCategoryRepo.save(productCategory);
    }

    async deleteProductCategory(productId: Number, categoryId: Number): Promise<void> {
        const productCategoryRepo = (await connection).getRepository(ProductCategory);
        let productCategoryId = await productCategoryRepo.findOne({
            where: {
                product: productId,
                category: categoryId
            }
        });
        if (productCategoryId) {
            productCategoryRepo.delete(productCategoryId);
        } else {
            throw OptionsError.UNEXISTING_OPTIONS;
        }
    }
}