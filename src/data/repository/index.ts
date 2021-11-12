import { Cart } from '../entity/cart';
import { Category } from '../entity/category';
import { Image } from '../entity/image';
import { Keyword } from '../entity/keyword';
import { Options } from '../entity/options';
import { Product } from '../entity/product';
import { Status } from '../entity/status';
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

export interface CartRepository {
    getCart(id: string): Promise<Cart>
    saveCart(image: Cart): Promise<void>
    updateCart(image: Cart): Promise<void>
    deleteCart(id: string): Promise<void>
}

export interface ImageRepository {
    getImage(id: string): Promise<Image>;
    saveImage(image: Image): Promise<void>;
    updateImage(image: Image): Promise<void>;
    deleteImage(id: string): Promise<void>;
}

export interface CategoryRepository {
    getCategory(id: string): Promise<Category>;
    saveCategory(category: Category): Promise<void>;
    updateCategory(category: Category): Promise<void>;
    deleteCategory(id: string): Promise<void>; 
}

export interface OptionsRepository {
    getOptions(id: string): Promise<Options>;
    saveOptions(keyword: Options): Promise<void>;
    updateOptions(keyword: Options): Promise<void>;
    deleteOptions(id: string): Promise<void>; 
}

export interface KeywordRepository {
    getKeyword(id: string): Promise<Keyword>;
    saveKeyword(keyword: Keyword): Promise<void>;
    updateKeyword(keyword: Keyword): Promise<void>;
    deleteKeyword(id: string): Promise<void>; 
}

export interface StatusRepository {
    getStatus(id: string): Promise<Status>;
    saveStatus(status: Status): Promise<void>;
    updateStatus(status: Status): Promise<void>;
    deleteStatus(id: string): Promise<void>; 
}