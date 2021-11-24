import { inject, injectable } from "inversify";

import { ProductService } from "..";
import { ProductDto } from "src/api/dto";
import { ProductMapper } from "src/data/mapper/modelMapper";
import { ProductRepository } from "src/data/repository";
import { Image } from "src/data/entity/image";
import { Category } from "src/data/entity/category";

@injectable()
export default class ProductServiceImpl implements ProductService {
    private productRepository: ProductRepository;
    private productMapper: ProductMapper;

    constructor (
        @inject('ProductRepository') productRepository: ProductRepository,
        @inject('ProductMapper') productMapper: ProductMapper
    ) {
        this.productRepository = productRepository;
        this.productMapper = productMapper;
    }

    async getAllProduct(): Promise<ProductDto[]> {
        try {
            let products = await this.productRepository.getAllProduct();
            let result = []
            for (var product of products) {
                let value = this.productMapper.convert(product);
                result.push(value)
            }
            return result;
        } catch (err) {
            throw err;
        }
    }

    async getProduct(id: string): Promise<ProductDto> {
        try {
            let product = await this.productRepository.getProduct(id);
            return this.productMapper.convert(product);
        } catch (err) {
            throw err;
        }
    }

    async getSearchProduct(search: string): Promise<ProductDto[]> {
        try {
            let products = await this.productRepository.getSearchProduct(search);
            let result = []
            for (var product of products) {
                let value = this.productMapper.convert(product);
                result.push(value)
            }
            return result;
        } catch(err) {
            throw err;
        }
    }

    async saveProduct(product: {"product": ProductDto, "category": Category[], "images": string[]}, clearance: boolean): Promise<string | undefined> {
        let categoryIds = product.category;
        let imageUrls = product.images;
        let newProduct = this.productMapper.revert(product.product);
        if (clearance === true) {
            await this.productRepository.saveProduct(newProduct, categoryIds, imageUrls);
            return "product saved";
        } else {
            "unauthorized user";
        }
    }

    async updateProduct(product: ProductDto): Promise<string> {
        let productInfo = this.productMapper.revert(product);
        await this.productRepository.updateProduct(productInfo);
        return "successfully updated";
    }

    async deleteProduct(id: string): Promise<string> {
        await this.productRepository.deleteProduct(id);
        return "successfully deleted";
    }
}