import { User } from '../entity/user';

export interface UserRepository {
    findById(id: string): Promise<User>;
    save(user: User): Promise<User>;
}