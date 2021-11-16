import { injectable } from "inversify";
import { StatusMapper } from "../modelMapper";
import { StatusDto } from "../../../api/dto/index";
import { Status } from "../../entity/status";

@injectable()
export default class StatusMapperImpl implements StatusMapper {
    convert (entity: Status): StatusDto {
        let dto = new StatusDto();

        dto.id = entity.id;
        dto.name = entity.name;
        dto.product = entity.product;

        return dto;
    }

    revert(dto: StatusDto): Status {
        let entity = new Status();

        entity.id = dto.id;
        entity.name = dto.name;
        entity.product = dto.product

        return entity;
    }
}