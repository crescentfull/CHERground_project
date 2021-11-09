import { User } from '../entity/user';
import { UserDto } from '../../api/dto';
 
interface BaseMapper<entity, dto> {
    convert(entity: entity): dto;
    revert(dto: dto): entity;
}

export interface UserMapper extends BaseMapper<User, UserDto> {}