import * as express from 'express';
import 'reflect-metadata';
import { userController } from './api/controller/userController';
import { productController } from './api/controller/productController';
import { imageController } from './api/controller/imageController';
import { requestLogger, errorHandler, corsSetting } from './middleware';
import { categoryController } from './api/controller/categoryController';
import { optionsController } from './api/controller/optionsController';
import { keywordController } from './api/controller/keywordController';
import { statusController } from './api/controller/statusController';
import { cartController } from './api/controller/cartController';
import { productCategoryController } from './api/controller/productCategoryController';

const cors = require('cors');

require('dotenv').config();

export default class App {
    public server: express.Application;
    
    constructor() {
        this.server = express.default();
        this.server.use(express.json());
        this.server.use(requestLogger);
        this.server.use(errorHandler);
        this.server.use(express.urlencoded({ extended: false }));
        this.server.use(cors());
        this.server.use(corsSetting);
        this.server.use('/user', userController);
        this.server.use('/product', productController);
        this.server.use('/image', imageController);
        this.server.use('/category', categoryController);
        this.server.use('/options', optionsController);
        this.server.use('/keyword', keywordController);
        this.server.use('/status', statusController);
        this.server.use('/cart', cartController);
        this.server.use('/product-category', productCategoryController);
    }
}