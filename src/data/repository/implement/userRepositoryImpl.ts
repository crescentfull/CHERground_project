import { injectable } from "inversify";
import { UserRepository } from "..";
import { connection } from "../../connection/connection";
import { UserError } from "../../../service/error/error";

import { User } from "../../entity/user";

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

    async save(user:User): Promise<User> {
        const userRepo = (await connection).getRepository(User);
        return userRepo.save(user);
    }
}