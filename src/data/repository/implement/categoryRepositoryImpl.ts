import { injectable } from "inversify";
import { connection } from "../../connection/connection";
import { Category } from "../../entity/category";
import { CategoryError } from "../../../service/error/error";
import { CategoryRepository } from "..";

@injectable()
export default class CategoryRepositoryImpl implements CategoryRepository {
    async getCategory(id: string): Promise<Category> {
        const categoryRepo = (await connection).getRepository(Category)
        let category = await categoryRepo.findOne({where: {id:id}})

        if(category) {
            return category;
        } else {
            throw CategoryError.UNEXISTING_CATEGORY;
        }
    }

    async updateCategory(category: Category): Promise<void> {
        const categoryRepo = (await connection).getRepository(Category);
        categoryRepo.save(category);
    }

    async saveCategory(category: Category): Promise<void> {
        const categoryRepo = (await connection).getRepository(Category);
        categoryRepo.save(category);
    }

    async deleteCategory(id: string): Promise<void> {
        const categoryRepo = (await connection).getRepository(Category);
        categoryRepo.delete(id);
    }
}