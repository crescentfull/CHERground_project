import { Container } from "inversify";

import * as ModelMapper from './data/mapper/modelMapper';
import * as Service from './service';
import * as Repository from './data/repository';

import UserRepositoryImpl from "./data/repository/implement/userRepositoryImpl";
import UserServiceImpl from "./service/implement/userServiceImpl";
import UserMapperImpl from "./data/mapper/implement/userMapperImpl";

const container: Container = new Container();

container.bind<Service.UserService>("UserService").to(UserServiceImpl);


container.bind<ModelMapper.UserMapper>("UserMapper").to(UserMapperImpl);

container.bind<Repository.UserRepository>("UserRepository").to(UserRepositoryImpl);

export default container;