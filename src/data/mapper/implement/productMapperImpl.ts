import { injectable } from "inversify";
import { ProductMapper } from "../modelMapper";
import { ProductDto } from "../../../api/dto/index";
import { Product } from "../../entity/product";

@injectable()
export default class ProductMapperImpl implements ProductMapper {
    convert (entity: Product): ProductDto {
        let dto = new ProductDto();

        dto.id = entity.id;
        dto.name = entity.name;
        dto.description = entity.description;
        dto.SKU = entity.SKU;
        dto.releasePrice = entity.releasePrice;
        dto.quantity = entity.quantity;
        dto.status = entity.status;

        return dto;
    }

    revert(dto: ProductDto): Product {
        let entity = new Product();

        entity.id = dto.id;
        entity.name = dto.name;
        entity.description = dto.description;
        entity.SKU = dto.SKU;
        entity.releasePrice = dto.releasePrice;
        entity.quantity = dto.quantity;
        entity.status = dto.status;

        return entity;
    }
}