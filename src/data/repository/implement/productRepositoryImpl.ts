import { injectable } from "inversify";
import { ProductRepository } from "..";
import { connection } from "../../connection/connection";
import { ProductError } from "../../../service/error/error";

import { Product } from "../../entity/product";

@injectable()
export default class ProductRepositoryImpl implements ProductRepository {
    async getProduct(id: string): Promise<Product> {
        const productRepo = (await connection).getRepository(Product);
        let product = await productRepo.findOne({id:Number(id)});

        if (product) {
            return product;
        } else {
            throw ProductError.UNEXISTING_PRODUCT;
        }
    }

    async saveProduct(product: Product): Promise<void> {
        const productRepo = (await connection).getRepository(Product);
        productRepo.save(product);
    }

    async updateProduct(product: Product): Promise<void> {
        const productRepo = (await connection).getRepository(Product);
        productRepo.save(product);
    }

    async deleteProduct(id: string): Promise<void> {
        const productRepo = (await connection).getRepository(Product);
        productRepo.delete(Number(id));
    }
}
