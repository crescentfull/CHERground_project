import { UserDto } from "src/api/dto";

export interface UserService {
    getUserById(id: string): Promise<UserDto>;
    saveUser(user: UserDto): Promise<UserDto>;
}