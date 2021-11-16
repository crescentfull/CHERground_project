import { injectable } from "inversify";
import { ProductRepository } from "..";
import { connection } from "../../connection/connection";
import { ProductError } from "../../../service/error/error";

import { Product } from "../../entity/product";
import { Like } from "typeorm";

@injectable()
export default class ProductRepositoryImpl implements ProductRepository {

    async getAllProduct(): Promise<Product[]> {
        const productRepo = (await connection).getRepository(Product);
        
        let products = await productRepo.find({
            join: {
                alias: "product",
                leftJoinAndSelect: {
                    image: "product.image"
                }
            }
        });

        return products;
    }

    async getProduct(id: string): Promise<Product> {
        const productRepo = (await connection).getRepository(Product);

        let product = await productRepo.findOne({
            where: {
                id: Number(id)
            },
            join: {
                alias: "product",
                leftJoinAndSelect: {
                    image: "product.image",
                    category: "product.category",
                    options: "product.options",
                    keyword: "options.keyword",
                    status: "product.status"
                }
            }
        });

        if (product) {
            return product;
        } else {
            throw ProductError.UNEXISTING_PRODUCT;
        }
    }

    async getSearchProduct(search: string): Promise<Product[]> {
        const productRepo = (await connection).getRepository(Product);

        let searchResult = await productRepo.find({
            where: {
                name: Like(`%${search}%`)
            },
            join: {
                alias: "product",
                leftJoinAndSelect: {
                    image: "product.image"
                }
            }
        });

        if (searchResult) {
            return searchResult;
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
        productRepo.save(product)
    }

    async deleteProduct(id: string): Promise<void> {
        const productRepo = (await connection).getRepository(Product);
        productRepo.delete(Number(id));
    }
}
