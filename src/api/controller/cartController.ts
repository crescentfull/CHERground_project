import * as express from "express";
import { inject } from "inversify";
import container from "../../injector";
import { CartService } from "src/service";
import { CartDto } from "../dto";

import { auth } from "../../middleware/index"

class CartController {
    public router = express.Router();
    private cartService: CartService;

    constructor (
        @inject("CartService") cartService: CartService
    ) {
        this.cartService = cartService;
        this.router.get('/:id', auth, (req: express.Request, res: express.Response, next: express.NextFunction) => {
            const userInfo:any = req.decoded;
            const userId = userInfo.id;
            this.cartService.getCart(req.params.id, userId)
            .then(cart => {
                res.status(200).send(cart);
            }).catch(err => {
                next(err);
            });
        })

        this.router.get('', auth, (req: express.Request, res: express.Response, next: express.NextFunction) => {
            const userInfo:any = req.decoded;
            const userId = userInfo.id;
            this.cartService.getUserCart(userId)
            .then(cart => {
                res.status(200).send(cart);
            }).catch(err => {
                next(err);
            });
        })

        this.router.post('', auth, (req: express.Request, res: express.Response, next: express.NextFunction) => {
            const userInfo:any = req.decoded;
            const userId = userInfo.id;
            let cart: CartDto = req.body;
            this.cartService.saveCart(cart, userId)
            .then(resolve => {
                res.status(200).send(JSON.stringify(resolve));
            }).catch(err => {
                next(err);
            })
        })

        this.router.patch('/:id', auth, (req: express.Request, res: express.Response, next: express.NextFunction) => {
            let updateInfo: CartDto = req.body;
            this.cartService.updateCart(updateInfo)
            .then(resolve => {
                res.status(200).send(JSON.stringify(resolve));
            }).catch(err => {
                next(err);
            })
        })

        this.router.delete('', auth, (req: express.Request, res: express.Response, next: express.NextFunction) => {
            const userInfo:any = req.decoded;
            const userId = userInfo.id;
            this.cartService.deleteCart(userId)
            .then(resolve => {
                res.status(200).send(JSON.stringify(resolve));
            }).catch (err => {
                next(err);
            })
        })

        this.router.delete('/:id', auth, (req: express.Request, res: express.Response, next: express.NextFunction) => {
            this.cartService.deleteOneCart(req.params.id)
            .then(resolve => {
                res.status(200).send(JSON.stringify(resolve));
            }).catch (err => {
                next(err);
            })
        })
    }
}

export const cartController = new CartController(container.get("CartService")).router;