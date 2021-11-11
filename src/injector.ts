import { Container } from "inversify";

import * as ModelMapper from './data/mapper/modelMapper';
import * as Service from './service';
import * as Repository from './data/repository';

import UserRepositoryImpl from "./data/repository/implement/userRepositoryImpl";
import UserServiceImpl from "./service/implement/userServiceImpl";
import UserMapperImpl from "./data/mapper/implement/userMapperImpl";
import ProductMapperImpl from "./data/mapper/implement/productMapper";
import ProductRepositoryImpl from "./data/repository/implement/productRepositoryImpl";
import ProductServiceImpl from "./service/implement/productServiceImpl";

const container: Container = new Container();

container.bind<Service.UserService>("UserService").to(UserServiceImpl);
container.bind<Service.ProductService>("ProductService").to(ProductServiceImpl);

container.bind<ModelMapper.UserMapper>("UserMapper").to(UserMapperImpl);
container.bind<ModelMapper.ProductMapper>("ProductMapper").to(ProductMapperImpl);

container.bind<Repository.UserRepository>("UserRepository").to(UserRepositoryImpl);
container.bind<Repository.ProductRepository>("ProductRepository").to(ProductRepositoryImpl);

export default container;