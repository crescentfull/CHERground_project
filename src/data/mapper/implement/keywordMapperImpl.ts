import { injectable } from "inversify";
import { KeywordMapper } from "../modelMapper";
import { KeywordDto } from "../../../api/dto/index";
import { Keyword } from "../../entity/keyword";

@injectable()
export default class KeywordMapperImpl implements KeywordMapper {
    convert (entity: Keyword): KeywordDto {
        let dto = new KeywordDto();

        dto.id = entity.id;
        dto.name = entity.name;
        dto.options = entity.options;

        return dto;
    }

    revert(dto: KeywordDto): Keyword {
        let entity = new Keyword();

        entity.id = dto.id;
        entity.name = dto.name;
        entity.options = dto.options;
        
        return entity;
    }
}