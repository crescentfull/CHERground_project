import { ProductDto, ImageDto, UserDto, CategoryDto, OptionsDto, KeywordDto, StatusDto, CartDto } from "src/api/dto";

export interface UserService {
    getUserById(id: string): Promise<UserDto>;
    getUser(user: UserDto): Promise<object | undefined>;
    saveUser(user: UserDto): Promise<UserDto>;
}

export interface ProductService {
    getAllProduct(): Promise<ProductDto[]>;
    getProduct(id: string): Promise<ProductDto>;
    getSearchProduct(search: string): Promise<ProductDto[]>;
    saveProduct(product: ProductDto): Promise<string>;
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
    getCart(id: string): Promise<CartDto>;
    getUserCart(user: string): Promise<CartDto[]>;
    saveCart(cart: CartDto): Promise<string>;
    updateCart(cart: CartDto): Promise<string>;
    deleteCart(id: string): Promise<string>;   
}

export interface CategoryService {
    getCategory(id: string): Promise<CategoryDto>;
    saveCategory(category: CategoryDto): Promise<string>;
    updateCategory(category: CategoryDto): Promise<string>;
    deleteCategory(id: string): Promise<string>; 
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
