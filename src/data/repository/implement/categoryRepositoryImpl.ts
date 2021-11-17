import { injectable } from "inversify";
import { connection } from "../../connection/connection";
import { Category } from "../../entity/category";
import { CategoryError } from "../../../service/error/error";
import { CategoryRepository } from "..";
import { ProductCategory } from "../../entity/productCategory";
import { Product } from "src/data/entity/product";

@injectable()
export default class CategoryRepositoryImpl implements CategoryRepository {
    async getCategory(id: string): Promise<Category[]> {
        const categoryRepo = (await connection).getRepository(Category);
        let category = await categoryRepo.find({
            where: {
                id: Number(id)
            },
            join: {
                alias: "category",
                leftJoinAndSelect: {
                    productCategory: "category.productCategory",
                    product: "productCategory.product",
                    image: "product.image"
                }
            }
        });
        
        return category;
    }

    async getCategoryList(): Promise<Category[]> {
        const categoryRepo = (await connection).getRepository(Category);
        let categories = categoryRepo.find({
            join: {
                alias: "category",
                leftJoinAndSelect: {
                    productCategory: "category.productCategory",
                    product: "productCategory.product",
                }
            }
        });

        return categories;
    }

    async updateCategory(category: Category): Promise<void> {
        const categoryRepo = (await connection).getRepository(Category);
        categoryRepo.save(category);
    }

    async saveCategory(category: Category, productIds: Product[]): Promise<void> {
        const categoryRepo = (await connection).getRepository(Category);
        await categoryRepo.save(category);
        let name:any = await categoryRepo.findOne({where: {name:category.name}});

        const productCategoryRepo = (await connection).getRepository(ProductCategory);
        for(var id of productIds) {
            await productCategoryRepo.save({"category": name.id, "product": id});
        }
    }

    async deleteCategory(id: string): Promise<void> {
        const categoryRepo = (await connection).getRepository(Category);
        categoryRepo.delete(id);
    }
}