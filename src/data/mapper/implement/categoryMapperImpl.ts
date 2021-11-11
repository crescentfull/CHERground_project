import { injectable } from "inversify";
import { CategoryMapper } from "../modelMapper";
import { CategoryDto } from "../../../api/dto/index";
import { Category } from "src/data/entity/category";

@injectable()
export default class CategoryMapperImpl implements CategoryMapper {
    convert (entity: Category): CategoryDto {
        let dto = new CategoryDto();

        dto.id = entity.id;
        dto.name = entity.name;
        dto.product = entity.product;

        return dto;
    }

    revert(dto: CategoryDto): Category {
        let entity = new Category();

        entity.id = dto.id;
        entity.product = dto.product;
        entity.name = dto.name;
        entity.product = dto.product;
        
        return entity;
    }
}