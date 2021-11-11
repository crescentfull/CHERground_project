import { injectable } from "inversify";
import { OptionMapper } from "../modelMapper";
import { OptionDto } from "../../../api/dto/index";
import { Options } from "src/data/entity/options";

@injectable()
export default class OptionMapperImpl implements OptionMapper {
    convert (entity: Options): OptionDto {
        let dto = new OptionDto();

        dto.id = entity.id;
        dto.name = entity.name;
        dto.product = entity.product;

        return dto;
    }

    revert(dto: OptionDto): Options {
        let entity = new Options();

        entity.id = dto.id;
        entity.name = dto.name;
        entity.product = dto.product;
        
        return entity;
    }
}