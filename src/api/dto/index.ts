import { Category } from "../../data/entity/category";
import { Product } from "../../data/entity/product";
import { Status } from "../../data/entity/status";
import { User } from "../../data/entity/user";

export class UserDto {
    id: number;
    email: string;
    password: string;
}

export class ProductDto {
    id: number;
    name: string;
    description: string;
    SKU: number;
    release_price: number;
    quantity: number;
    status: Status;
}

export class ImageDto {
    id: number;
    imageUrl: string;
    product: Product;
}

export class CategoryDto {
    id: number;
    name: string;
    product: Product;
}

export class StatusDto {
    id: number;
    name: string;
}

export class CartDto {
    id: number;
    quantity: number;
    user: User;
    product: Product;
}