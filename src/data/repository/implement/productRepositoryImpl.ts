import { injectable } from "inversify";
import { ProductRepository } from "..";
import { connection } from "../../connection/connection";
import { InputError, ProductError } from "../../../service/error/error";

import { Product } from "../../entity/product";
import { Like } from "typeorm";
import { ProductCategory } from "../../entity/productCategory";
import { Image } from "../../entity/image";
import { Category } from "../../entity/category";

@injectable()
export default class ProductRepositoryImpl implements ProductRepository {

    async getAllProduct(): Promise<Product[]> {
        const productRepo = (await connection).getRepository(Product);
        
        let products = await productRepo.find({
            join: {
                alias: "product",
                leftJoinAndSelect: {
                    image: "product.image",
                    productCategory: "product.productCategory",
                    category: "productCategory.category",
                    options: "product.options",
                    keyword: "options.keyword",
                    status: "product.status"
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
                    productCategory: "product.productCategory",
                    category: "productCategory.category",
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

    async saveProduct(product: Product, category: Category[], images: string[]): Promise<void> {
        const productRepo = (await connection).getRepository(Product);
        await productRepo.save(product);
        let productId:any = await productRepo.findOne({where: {name: product.name}});

        const productCategoryRepo = (await connection).getRepository(ProductCategory);
        
        for (var categoryId of category) {
            await productCategoryRepo.save({"category": categoryId, "product": productId.id})
        }

        const imageRepo = (await connection).getRepository(Image);

        for (var image of images) {
            await imageRepo.save({"imageUrl": image, "product": productId.id});
        }
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