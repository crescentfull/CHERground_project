import { Product } from '../entity/product';
import { User } from '../entity/user';

export interface UserRepository {
    findById(id: string): Promise<User>;
    save(user: User): Promise<User>;
}

export interface ProductRepository {
    getProduct(id: string): Promise<Product>;
    saveProduct(product: Product): Promise<void>;
    updateProduct(product: Product): Promise<void>;
    deleteProduct(id: string): Promise<void>;
}