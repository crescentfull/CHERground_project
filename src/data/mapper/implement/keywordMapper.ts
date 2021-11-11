import { injectable } from "inversify";
import { KeywordMapper } from "../modelMapper";
import { KeywordDto } from "../../../api/dto/index";
import { Keyword } from "src/data/entity/keyword";

@injectable()
export default class KeywordMapperImpl implements KeywordMapper {
    convert (entity: Keyword): KeywordDto {
        let dto = new KeywordDto();

        dto.id = entity.id;
        dto.name = entity.name;
        dto.option = entity.option;

        return dto;
    }

    revert(dto: KeywordDto): Keyword {
        let entity = new Keyword();

        entity.id = dto.id;
        entity.name = dto.name;
        entity.option = dto.option;
        
        return entity;
    }
}