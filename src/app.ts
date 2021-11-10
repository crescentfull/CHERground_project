import * as express from 'express';
import 'reflect-metadata';
import { userController } from './api/controller/userController';
import { requestLogger, errorHandler } from './middleware';
import 'cors'

const cors = require('cors')

export default class App {
    public server: express.Application;

    constructor() {
        this.server = express.default();
        this.server.use(express.json());
        this.server.use(requestLogger)
        this.server.use(errorHandler)
        this.server.use('/user', userController);
        this.server.use(cors({
            origin: '*'
        }))
    }
}