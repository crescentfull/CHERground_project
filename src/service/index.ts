import { ProductDto, ImageDto, UserDto, CartDto } from "src/api/dto";

export interface UserService {
    getUserById(id: string): Promise<UserDto>;
    saveUser(user: UserDto): Promise<UserDto>;
}

export interface ProductService {
    getProduct(id: string): Promise<ProductDto>;
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
    saveCart(cart: CartDto): Promise<string>;
    updateCart(cart: CartDto): Promise<string>;
    deleteCart(id: string): Promise<string>;
    
}