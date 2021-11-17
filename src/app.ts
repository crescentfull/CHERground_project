import * as express from 'express';
import 'reflect-metadata';
import { userController } from './api/controller/userController';
import { productController } from './api/controller/productController';
import { imageController } from './api/controller/imageController';
import { requestLogger, errorHandler } from './middleware';
import { categoryController } from './api/controller/categoryController';
import { optionsController } from './api/controller/optionsController';
import { keywordController } from './api/controller/keywordController';
import { statusController } from './api/controller/statusController';
import { cartController } from './api/controller/cartController';

const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

require('dotenv').config();

var allowedOrigins = ['http://localhost:3000']

export default class App {
    public server: express.Application;
    
    constructor() {
        this.server = express.default();
        this.server.use(express.json());
        this.server.use(requestLogger);
        this.server.use(errorHandler);
        this.server.use(express.urlencoded({ extended: false }));
        this.server.use(cors({
            origin: allowedOrigins,
            credentials: true
        }));
        this.server.use('/user', userController);
        this.server.use('/product', productController);
        this.server.use('/image', imageController);
        this.server.use('/category', categoryController);
        this.server.use('/options', optionsController);
        this.server.use('/keyword', keywordController);
        this.server.use('/status', statusController);
        this.server.use('/cart', cartController);
        this.server.use(cors({
            origin: '*'
        }))
    }
}