import { Cart } from "src/data/entity/cart";
import { Category } from "src/data/entity/category";
import { Image } from "src/data/entity/image";
import { Keyword } from "src/data/entity/keyword";
import { Options } from "src/data/entity/options";
import { ProductCategory } from "src/data/entity/productCategory";
import { Product } from "../../data/entity/product";
import { Status } from "../../data/entity/status";
import { User } from "../../data/entity/user";

export class UserDto {
    id: number;
    email: string;
    password: string;
    clearance?: boolean;
}

export class ProductDto {
    id: number;
    name?: string;
    description?: string;
    SKU?: number;
    releasePrice?: number;
    quantity?: number;
    status?: Status[];
    image?: Image[];
    productCategory?: ProductCategory[];
    cart?: Cart[];
    options?: Options[];
}

export class ImageDto {
    id: number;
    imageUrl: string;
    product: Product;
}

export class CategoryDto {
    id: number;
    name: string;
    productCategory?: ProductCategory[];
}

export class ProductCategoryDto {
    id: number;
    product: Product[];
    category: Category[];
}

export class StatusDto {
    id: number;
    name: boolean;
    product: Product[];
}

export class CartDto {
    id: number;
    quantity: number;
    user: User;
    product: Product[];
    optionKeyword?: string;
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
    options: Options[];
}