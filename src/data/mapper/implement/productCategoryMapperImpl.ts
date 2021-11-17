import { injectable } from "inversify";
import { ProductCategoryMapper } from "../modelMapper";
import { ProductCategoryDto } from "../../../api/dto/index";
import { ProductCategory } from "../../entity/productCategory";

@injectable()
export default class ProductCategoryMapperImpl implements ProductCategoryMapper {
    convert (entity: ProductCategory): ProductCategoryDto {
        let dto = new ProductCategoryDto();

        dto.id = entity.id;
        dto.product = entity.product;
        dto.category = entity.category;

        return dto;
    }

    revert(dto: ProductCategoryDto): ProductCategory {
        let entity = new ProductCategory();

        entity.id = dto.id;
        entity.product = dto.product;
        entity.category = dto.category;
        
        return entity;
    }
}