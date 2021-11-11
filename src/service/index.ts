import { ProductDto, UserDto } from "src/api/dto";

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