import * as express from 'express';
import { CustomError } from '../service/error/error';

const jwt =  require("jsonwebtoken");
require('dotenv').config();

declare global {
    namespace Express {
        interface Request {
            decoded?: string;
        }
    }
}

export const requestLogger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`${new Date().toISOString()} [${req.method}] ${req.url} From: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}`);
    next();
}

export const errorHandler = function (err: CustomError, req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log(err);
    res.status(err.status || 500).send(err || "Internal Server Error");
}

export const auth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        req.decoded = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
        return next();
    } catch (error:any) {
        if (error.name === "TokenExpiredError") {
            return res.status(419).json({
                code: 419,
                message: "token expired"
            });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                code: 401,
                message: "invalid token"
            });
        }
    }
}

export const corsSetting = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, HEAD, OPTIONS, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Cache-Control, Accept, X-Access-Token, X-Requested-With, Content-Type, Access-Control-Request-Method"
    );
    if(req.method === "OPTIONS") {
        return res.status(200).end();
    }
    next();
}