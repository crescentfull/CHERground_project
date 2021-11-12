import { Cart } from "src/data/entity/cart";
import { Category } from "src/data/entity/category";
import { Image } from "src/data/entity/image";
import { Keyword } from "src/data/entity/keyword";
import { Options } from "src/data/entity/options";
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
    releasePrice: number;
    quantity: number;
    status: Status[];
    image: Image[];
    category: Category[];
    cart: Cart[];
    option: Options[];
}

export class ImageDto {
    id: number;
    imageUrl: string;
    product: Product[];
}

export class CategoryDto {
    id: number;
    name: string;
    product: Product[];
}

export class StatusDto {
    id: number;
    name: boolean;
    product: Product[];
}

export class CartDto {
    id: number;
    quantity: number;
    user: User[];
    product: Product[];
}

export class OptionsDto {
    id: number;
    name: string;
    keyword: Keyword[];
    product: Product[];
}

export class KeywordDto {
    id: number;
    name: string;
    option: Options[];
}