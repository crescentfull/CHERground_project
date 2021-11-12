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

    async getCategory(id: string): Promise<CategoryDto> {
        try {
            let category = await this.categoryRepository.getCategory(id);
            return this.categoryMapper.convert(category);
        } catch (err) {
            throw err;
        }
    }

    async saveCategory(catogory: CategoryDto): Promise<string> {
        let categoryInfo = this.categoryMapper.revert(catogory);
        await this.categoryRepository.saveCategory(categoryInfo);
        return "successfully saved";
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