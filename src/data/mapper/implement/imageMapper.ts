import { injectable } from "inversify";
import { ImageMapper } from "../modelMapper";
import { ImageDto } from "../../../api/dto/index";
import { Image } from "src/data/entity/image";

@injectable()
export default class ImageMapperImpl implements ImageMapper {
    convert (entity: Image): ImageDto {
        let dto = new ImageDto();

        dto.id = entity.id;
        dto.product = entity.product;
        dto.imageUrl = entity.imageUrl;

        return dto;
    }

    revert(dto: ImageDto): Image {
        let entity = new Image();

        entity.id = dto.id;
        entity.product = dto.product;
        entity.imageUrl = dto.imageUrl;
        
        return entity;
    }
}