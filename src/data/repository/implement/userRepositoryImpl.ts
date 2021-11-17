import { injectable } from "inversify";
import { UserRepository } from "..";
import { connection } from "../../connection/connection";
import { UserError } from "../../../service/error/error";
import { User } from "../../entity/user";
const bcrypt = require('bcrypt');

@injectable()
export default class UserRepositoryImpl implements UserRepository {
    async findById(id:string): Promise<User> {
        const userRepo = (await connection).getRepository(User);
        let user = await userRepo.findOne({where: {id:id}})
        if (user) {
            return user;
        } else {
            throw UserError.UNEXISTING_USER;
        }
    }

    async getUser(user: User): Promise<User | undefined> {
        const userRepo = (await connection).getRepository(User);
        let filter = await userRepo.findOne({where: {email:user.email}});

        if (filter) {
            var check = await bcrypt.compare(user.password, filter.password);
            if (check) {
                return filter;
            } else {
                throw UserError.UNEXISTING_USER;
            }
        } else {
            throw UserError.UNEXISTING_USER;
        }
    }

    async save(user:User): Promise<User> {
        const userRepo = (await connection).getRepository(User);
        return userRepo.save(user);
    }
}