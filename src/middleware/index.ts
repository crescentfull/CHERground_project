import * as express from 'express'
// import * as jwt from 'jsonwebtoken'
import { CustomError } from '../service/error/error';

const jwt = require('jsonwebtoken')

export const userToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        req.headers.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN_SECRET_KEY);
        return next();    
    }catch(e: any) {
        if (e.name === 'TokenExpiredError') {
            return res.status(419).json({
                code : 419,
                message : 'TOKEN_EXPIRED'
            });
        }

        return res.status(401).json({
            code: 401,
            message : 'INVALID_TOKEN'
        })
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