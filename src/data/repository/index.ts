import { Cart } from '../entity/cart';
import { Category } from '../entity/category';
import { Image } from '../entity/image';
import { Keyword } from '../entity/keyword';
import { Options } from '../entity/options';
import { Product } from '../entity/product';
import { ProductCategory } from '../entity/productCategory';
import { Status } from '../entity/status';
import { User } from '../entity/user';

export interface UserRepository {
    findById(id: string): Promise<User>;
    getUser(use: User): Promise<User | undefined>;
    save(user: User): Promise<User>;
}

export interface ProductRepository {
    getAllProduct(): Promise<Product[]>
    getProduct(id: string): Promise<Product>;
    getSearchProduct(search: string): Promise<Product[]>;
    saveProduct(product: Product): Promise<void>;
    updateProduct(product: Product): Promise<void>;
    deleteProduct(id: string): Promise<void>;
}

export interface CartRepository {
    getUserCartDetail(id: string, userId: string): Promise<Cart>;
    getUserCart(userId: string): Promise<Cart[]>;
    saveCart(image: Cart, userId: User): Promise<void>;
    updateCart(quantity: Cart): Promise<void>;
    deleteCart(id: string): Promise<void>;
    deleteOneCart(cartId: string): Promise<void>;
}

export interface ImageRepository {
    getImage(id: string): Promise<Image>;
    saveImage(image: Image): Promise<void>;
    updateImage(image: Image): Promise<void>;
    deleteImage(id: string): Promise<void>;
}

export interface CategoryRepository {
    getCategory(id: string): Promise<Category[]>;
    getCategoryList(): Promise<Category[]>;
    saveCategory(category: Category): Promise<Category | undefined>;
    updateCategory(category: Category): Promise<void>;
    deleteCategory(id: string): Promise<void>;
}

export interface ProductCategoryRepository {
    getProductCategory(id: string): Promise<ProductCategory>;
    saveProductCategory(category: ProductCategory): Promise<void>;
    updateProductCategory(category: ProductCategory): Promise<void>;
    deleteProductCategory(id: string): Promise<void>; 
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