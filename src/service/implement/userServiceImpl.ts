import { inject, injectable } from "inversify";

import { UserService } from "..";
import { UserDto } from "src/api/dto";
import { UserMapper } from "src/data/mapper/modelMapper";
import { UserRepository } from "src/data/repository";

@injectable()
export default class UserServiceImpl implements UserService {
    private userRepository: UserRepository;
    private userMapper: UserMapper;

    constructor (
        @inject('UserRepository') userRepository: UserRepository,
        @inject('UserMapper') userMapper: UserMapper
    ) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    async getUserById(id: string): Promise<UserDto> {
        try {
            let user = await this.userRepository.findById(id);
            return this.userMapper.convert(user);
        } catch (err) {
            throw err;
        }
    }

    async saveUser(user: UserDto): Promise<UserDto> {
        let userInfo = this.userMapper.revert(user);
        return await this.userRepository.save(userInfo);
    }
}