import { inject, injectable } from "inversify";
import { UserService } from "..";
import { UserDto } from "src/api/dto";
import { UserMapper } from "src/data/mapper/modelMapper";
import { UserRepository } from "src/data/repository";

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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

    async getUser(user: UserDto): Promise<object | undefined> {
        let loginInfo = this.userMapper.revert(user);
        let instance = await this.userRepository.getUser(loginInfo);
        if (instance) {
            const token = jwt.sign({
                id: instance.id,
                email: instance.email,
                password: instance.password,
                clearance: instance.clearance
            }, process.env.SECRET_KEY)
            return {"token": token};
        }
    }

    async saveUser(user: UserDto): Promise<UserDto> {
        let userInfo = this.userMapper.revert(user);
        userInfo.password = await bcrypt.hash(userInfo.password, 10);
        return await this.userRepository.save(userInfo);
    }
}