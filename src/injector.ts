import { Container } from "inversify";

import * as ModelMapper from './data/mapper/modelMapper';
import * as Service from './service';
import * as Repository from './data/repository';

import UserRepositoryImpl from "./data/repository/implement/userRepositoryImpl";
import UserServiceImpl from "./service/implement/userServiceImpl";
import UserMapperImpl from "./data/mapper/implement/userMapperImpl";
import ProductMapperImpl from "./data/mapper/implement/productMapperImpl";
import ProductRepositoryImpl from "./data/repository/implement/productRepositoryImpl";
import ProductServiceImpl from "./service/implement/productServiceImpl";
import ImageServiceImpl from "./service/implement/imageServiceImpl";
import ImageMapperImpl from "./data/mapper/implement/imageMapperImpl";
import ImageRepositoryImpl from "./data/repository/implement/ImageRepositoryImpl";
import CartMapperImpl from "./data/mapper/implement/cartMapperImpl";
import CartRepositoryImpl from "./data/repository/implement/cartRepositoryImpl";

const container: Container = new Container();

container.bind<Service.UserService>("UserService").to(UserServiceImpl);
container.bind<Service.ProductService>("ProductService").to(ProductServiceImpl);
container.bind<Service.ImageService>("ImageService").to(ImageServiceImpl);

container.bind<ModelMapper.UserMapper>("UserMapper").to(UserMapperImpl);
container.bind<ModelMapper.ProductMapper>("ProductMapper").to(ProductMapperImpl);
container.bind<ModelMapper.ImageMapper>("ImageMapper").to(ImageMapperImpl);
container.bind<ModelMapper.CartMapper>("CartMapper").to(CartMapperImpl);

container.bind<Repository.UserRepository>("UserRepository").to(UserRepositoryImpl);
container.bind<Repository.ProductRepository>("ProductRepository").to(ProductRepositoryImpl);
container.bind<Repository.ImageRepository>("ImageRepository").to(ImageRepositoryImpl);
container.bind<Repository.CartRepository>("CartRepository").to(CartRepositoryImpl);

export default container;