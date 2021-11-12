import { inject, injectable } from "inversify";

import { ProductService } from "..";
import { ProductDto } from "src/api/dto";
import { ProductMapper } from "src/data/mapper/modelMapper";
import { ProductRepository } from "src/data/repository";

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

    async getProduct(id: string): Promise<ProductDto> {
        try {
            let product = await this.productRepository.getProduct(id);
            return this.productMapper.convert(product);
        } catch (err) {
            throw err;
        }
    }

    async saveProduct(product: ProductDto): Promise<string> {
        let productInfo = this.productMapper.revert(product);
        await this.productRepository.saveProduct(productInfo)
        return "successfully saved";
    }

    async updateProduct(product: ProductDto): Promise<string> {
        let productInfo = this.productMapper.revert(product);
        await this.productRepository.saveProduct(productInfo)
        return "successfully updated";
    }

    async deleteProduct(id: string): Promise<string> {
        await this.productRepository.deleteProduct(id)
        return "successfully deleted"
    }
}