import { User } from '../entity/user';
import { CartDto, CategoryDto, ImageDto, KeywordDto, OptionDto, ProductDto, StatusDto, UserDto } from '../../api/dto';
import { Product } from '../entity/product';
import { Image } from '../entity/image';
import { Status } from '../entity/status';
import { Category } from '../entity/category';
import { Keyword } from '../entity/keyword';
import { Options } from '../entity/options';
import { Cart } from '../entity/cart';
 
interface BaseMapper<entity, dto> {
    convert(entity: entity): dto;
    revert(dto: dto): entity;
}

export interface UserMapper extends BaseMapper<User, UserDto> {}

export interface ProductMapper extends BaseMapper<Product, ProductDto> {}
export interface ImageMapper extends BaseMapper<Image, ImageDto> {}
export interface StatusMapper extends BaseMapper<Status, StatusDto> {}
export interface CategoryMapper extends BaseMapper<Category, CategoryDto> {}

export interface KeywordMapper extends BaseMapper<Keyword, KeywordDto> {}
export interface OptionMapper extends BaseMapper<Options, OptionDto> {}

export interface CartMapper extends BaseMapper<Cart, CartDto> {}