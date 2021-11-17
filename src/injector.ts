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
import CartServiceImpl from "./service/implement/cartServiceImpl";
import CategoryServiceImpl from "./service/implement/categoryServiceImpl";
import CategoryMapperImpl from "./data/mapper/implement/categoryMapperImpl";
import CategoryRepositoryImpl from "./data/repository/implement/categoryRepositoryImpl";
import OptionsServiceImpl from "./service/implement/optionsServiceImpl";
import OptionsMapperImpl from "./data/mapper/implement/optionMapperImpl";
import OptionsRepositoryImpl from "./data/repository/implement/optionsRepositoryImpl";
import KeywordServiceImpl from "./service/implement/keywordServiceImpl";
import KeywordMapperImpl from "./data/mapper/implement/keywordMapperImpl";
import KeywordRepositoryImpl from "./data/repository/implement/keywordRepositoryImpl";
import StatusServiceImpl from "./service/implement/statusServiceImpl";
import StatusMapperImpl from "./data/mapper/implement/statusMapperImpl";
import StatusRepositoryImpl from "./data/repository/implement/statusRepositoryImpl";
import ProductCategoryServiceImpl from "./service/implement/productCategoryServiceImpl";
import ProductCategoryMapperImpl from "./data/mapper/implement/productCategoryMapperImpl";
import ProductCategoryRepositoryImpl from "./data/repository/implement/productCategoryRepositoryImpl";


const container: Container = new Container();

container.bind<Service.UserService>("UserService").to(UserServiceImpl);
container.bind<Service.ProductService>("ProductService").to(ProductServiceImpl);
container.bind<Service.ImageService>("ImageService").to(ImageServiceImpl);
container.bind<Service.CartService>("CartService").to(CartServiceImpl);
container.bind<Service.CategoryService>("CategoryService").to(CategoryServiceImpl);
container.bind<Service.OptionsService>("OptionsService").to(OptionsServiceImpl);
container.bind<Service.KeywordService>("KeywordService").to(KeywordServiceImpl);
container.bind<Service.StatusService>("StatusService").to(StatusServiceImpl);
container.bind<Service.ProductCategoryService>("ProductCategoryService").to(ProductCategoryServiceImpl);

container.bind<ModelMapper.UserMapper>("UserMapper").to(UserMapperImpl);
container.bind<ModelMapper.ProductMapper>("ProductMapper").to(ProductMapperImpl);
container.bind<ModelMapper.ImageMapper>("ImageMapper").to(ImageMapperImpl);
container.bind<ModelMapper.CartMapper>("CartMapper").to(CartMapperImpl);
container.bind<ModelMapper.CategoryMapper>("CategoryMapper").to(CategoryMapperImpl);
container.bind<ModelMapper.OptionsMapper>("OptionsMapper").to(OptionsMapperImpl);
container.bind<ModelMapper.KeywordMapper>("KeywordMapper").to(KeywordMapperImpl);
container.bind<ModelMapper.StatusMapper>("StatusMapper").to(StatusMapperImpl);
container.bind<ModelMapper.ProductCategoryMapper>("ProductCategoryMapper").to(ProductCategoryMapperImpl);

container.bind<Repository.UserRepository>("UserRepository").to(UserRepositoryImpl);
container.bind<Repository.ProductRepository>("ProductRepository").to(ProductRepositoryImpl);
container.bind<Repository.ImageRepository>("ImageRepository").to(ImageRepositoryImpl);
container.bind<Repository.CartRepository>("CartRepository").to(CartRepositoryImpl);
container.bind<Repository.CategoryRepository>("CategoryRepository").to(CategoryRepositoryImpl);
container.bind<Repository.OptionsRepository>("OptionsRepository").to(OptionsRepositoryImpl);
container.bind<Repository.KeywordRepository>("KeywordRepository").to(KeywordRepositoryImpl);
container.bind<Repository.StatusRepository>("StatusRepository").to(StatusRepositoryImpl);
container.bind<Repository.ProductCategoryRepository>("ProductCategoryRepository").to(ProductCategoryRepositoryImpl);

export default container;