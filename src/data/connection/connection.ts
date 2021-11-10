import { createConnection, Connection } from 'typeorm';
import { User } from '../entity/user';
import { Category } from '../entity/category';
import { Product } from '../entity/product';
import { Status } from '../entity/status';
import { Image } from '../entity/image';
import { Cart } from '../entity/cart';
import { Keyword } from '../entity/keyword';
import { Options } from '../entity/options'

import 'reflect-metadata';
require('dotenv').config()

export const connection: Promise<Connection> = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "cherground",
    entities: [User, Category, Product, Status, Image, Cart, Options, Keyword],
    logging: true,
    synchronize: true
})