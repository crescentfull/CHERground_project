import { inject, injectable } from "inversify";
import { CategoryDto } from "src/api/dto";
import { CategoryMapper } from "src/data/mapper/modelMapper";
import { CategoryRepository } from "src/data/repository";
import { CategoryService } from "..";


@injectable()
export default class CategoryServiceImpl implements CategoryService {
    private categoryRepository: CategoryRepository;
    private categoryMapper: CategoryMapper;

    constructor (
        @inject('CategoryRepository') categoryRepository: CategoryRepository,
        @inject('CategoryMapper') categoryMapper: CategoryMapper
    ) {
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }

    async getCategory(id: string, clearance: boolean): Promise<CategoryDto[] | string> {
        if (clearance === true) {
            let category = await this.categoryRepository.getCategory(id);
            let result = []
            for (var item of category) {
                let value = this.categoryMapper.convert(item);
                result.push(value);
            }
            return result;
        } else {
            return "unauthorized user";
        }

    }

    async getCategoryList(): Promise<CategoryDto[] | string> {
        let categories = await this.categoryRepository.getCategoryList();
        let result = []
        for (var category of categories) {
            let value:any = this.categoryMapper.convert(category);
            let count = 0;
            for (var product of value.productCategory) {
                count += 1;
            }
            value.count = count;
            result.push(value)
        }
        return result;
    }

    async saveCategory(category: CategoryDto, clearance: boolean): Promise<object | string | undefined> {
        let categoryInfo = this.categoryMapper.revert(category);
        if (clearance === true) {
            let newCategory = await this.categoryRepository.saveCategory(categoryInfo);
            return newCategory;
        } else {
            return "unauthorized user";
        }
    }

    async updateCategory(catogory: CategoryDto): Promise<string> {
        let categoryInfo = this.categoryMapper.revert(catogory);
        await this.categoryRepository.updateCategory(categoryInfo);
        return "successfully updated";
    }

    async deleteCategory(id: string): Promise<string> {
        await this.categoryRepository.deleteCategory(id);
        return "successfully deleted";
    }
}