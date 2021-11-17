import { ProductDto, ImageDto, UserDto, CategoryDto, OptionsDto, KeywordDto, StatusDto, CartDto, ProductCategoryDto } from "src/api/dto";
import { User } from "src/data/entity/user";

export interface UserService {
    getUserById(id: string): Promise<UserDto>;
    getUser(user: UserDto): Promise<object | undefined>;
    saveUser(user: UserDto): Promise<UserDto>;
}

export interface ProductService {
    getAllProduct(): Promise<ProductDto[]>;
    getProduct(id: string): Promise<ProductDto>;
    getSearchProduct(search: string): Promise<ProductDto[]>;
    saveProduct(product: ProductDto, clearance: boolean): Promise<string | undefined>;
    updateProduct(product: ProductDto): Promise<string>;
    deleteProduct(id: string): Promise<string>
}

export interface ImageService {
    getImage(id: string): Promise<ImageDto>;
    saveImage(image: ImageDto): Promise<string>;
    updateImage(image: ImageDto): Promise<string>;
    deleteImage(id: string): Promise<string>;
}

export interface CartService {
    getCart(id: string, userId: string): Promise<CartDto>;
    getUserCart(user: string): Promise<CartDto[]>;
    saveCart(cart: CartDto, userId: User): Promise<string>;
    updateCart(quantity: CartDto): Promise<string>;
    deleteCart(id: string): Promise<string>;   
    deleteOneCart(cartId: string): Promise<string>;
}

export interface CategoryService {
    getCategory(id: string, clearance:boolean): Promise<CategoryDto[] | string>;
    getCategoryList(): Promise<CategoryDto[] | string>;
    saveCategory(category: CategoryDto, clearance: boolean): Promise<object | string | undefined>;
    updateCategory(category: CategoryDto): Promise<string>;
    deleteCategory(id: string): Promise<string>;
}

export interface ProductCategoryService {
    getProductCategory(id: string): Promise<ProductCategoryDto>;
    saveProductCategory(category: ProductCategoryDto[], clearance: boolean): Promise<void | string | undefined>;
    updateProductCategory(category: ProductCategoryDto): Promise<string>;
    deleteProductCategory(id: string, clearance: boolean): Promise<string>; 
}

export interface OptionsService {
    getOptions(id: string): Promise<OptionsDto>;
    saveOptions(Options: OptionsDto): Promise<string>;
    updateOptions(Options: OptionsDto): Promise<string>;
    deleteOptions(id: string): Promise<string>; 
}

export interface KeywordService {
    getKeyword(id: string): Promise<KeywordDto>;
    saveKeyword(keyword: KeywordDto): Promise<string>;
    updateKeyword(keyword: KeywordDto): Promise<string>;
    deleteKeyword(id: string): Promise<string>; 
}

export interface StatusService {
    getStatus(id: string): Promise<StatusDto>;
    saveStatus(status: StatusDto): Promise<string>;
    updateStatus(status: StatusDto): Promise<string>;
    deleteStatus(id: string): Promise<string>; 
}
