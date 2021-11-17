import { injectable } from "inversify";
import { connection } from "../../connection/connection";
import { Category } from "../../entity/category";
import { CategoryError } from "../../../service/error/error";
import { CategoryRepository } from "..";

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

    async saveCategory(category: Category): Promise<Category | undefined> {
        const categoryRepo = (await connection).getRepository(Category);
        categoryRepo.save(category);
        let name = await categoryRepo.findOne({where: {name:category.name}});
        return name;
    }

    async deleteCategory(id: string): Promise<void> {
        const categoryRepo = (await connection).getRepository(Category);
        categoryRepo.delete(id);
    }
}