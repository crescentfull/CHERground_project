import { injectable } from "inversify";
import { StatusMapper } from "../modelMapper";
import { StatusDto } from "../../../api/dto/index";
import { Status } from "src/data/entity/status";

@injectable()
export default class StatusMapperImpl implements StatusMapper {
    convert (entity: Status): StatusDto {
        let dto = new StatusDto();

        dto.id = entity.id;
        dto.name = entity.name;

        return dto;
    }

    revert(dto: StatusDto): Status {
        let entity = new Status();

        entity.id = dto.id;
        entity.name = dto.name;
        
        return entity;
    }
}