import { injectable } from "inversify";
import { UserMapper } from "../modelMapper";
import { UserDto } from "../../../api/dto/index";
import { User } from "../../entity/user";

@injectable()
export default class UserMapperImpl implements UserMapper {
    convert (entity: User): UserDto {
        let dto = new UserDto();

        dto.id = entity.id;
        dto.email = entity.email;
        dto.password = entity.password;
        dto.clearance = entity.clearance;

        return dto;
    }

    revert(dto: UserDto): User {
        let entity = new User();

        entity.id = dto.id;
        entity.email = dto.email;
        entity.password = dto.password;
        entity.clearance = dto.clearance;

        return entity;
    }
}