import * as express from 'express';
import 'reflect-metadata';
import { userController } from './api/controller/userController';

export default class App {
    public server: express.Application;

    constructor() {
        this.server = express.default();
        this.server.use(express.json());
        this.server.use('/user', userController);
    }
}