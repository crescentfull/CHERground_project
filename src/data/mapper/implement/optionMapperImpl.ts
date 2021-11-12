import { injectable } from "inversify";
import { OptionsMapper } from "../modelMapper";
import { OptionsDto } from "../../../api/dto/index";
import { Options } from "../../entity/options";

@injectable()
export default class OptionsMapperImpl implements OptionsMapper {
    convert (entity: Options): OptionsDto {
        let dto = new OptionsDto();

        dto.id = entity.id;
        dto.name = entity.name;
        dto.product = entity.product;

        return dto;
    }

    revert(dto: OptionsDto): Options {
        let entity = new Options();

        entity.id = dto.id;
        entity.name = dto.name;
        entity.product = dto.product;
        
        return entity;
    }
}