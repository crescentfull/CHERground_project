import { Image } from '../entity/image';
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
export interface ImageRepository {
    getImage(id: string): Promise<Image>
    saveImage(image: Image): Promise<void>
    updateImage(image: Image): Promise<void>
    deleteImage(id: string): Promise<void>
}