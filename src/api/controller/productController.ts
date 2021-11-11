import * as express from "express";
import { inject } from "inversify";
import container from "../../injector";

import { ProductDto } from "../dto";
import { ProductService } from "src/service";

class ProductController {
    public router = express.Router();
    private productService: ProductService;

    constructor (
        @inject("ProductService") productService: ProductService
    ) {
        this.productService = productService;
        this.router.get('/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
            this.productService.getProduct(req.params.id)
            .then(product => {
                res.status(200).send(product);
            }).catch(err => {
                next(err);
            });
        })

        this.router.post('', (req: express.Request, res: express.Response, next: express.NextFunction) => {
            let product: ProductDto = req.body;
            this.productService.saveProduct(product)
            .then(resolve => {
                res.status(200).send(JSON.stringify(resolve));
            }).catch(err => {
                next(err);
            })
        })

        this.router.patch('', (req: express.Request, res: express.Response, next: express.NextFunction) => {
            let product: ProductDto = req.body;
            this.productService.updateProduct(product)
            .then(resolve => {
                res.status(200).send(JSON.stringify(resolve));
            }).catch(err => {
                next(err);
            })
        })

        this.router.delete('/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
            this.productService.deleteProduct(req.params.id)
            .then(resolve => {
                res.status(200).send(JSON.stringify(resolve));
            }).catch (err => {
                next(err);
            })
        })
    }
}

export const productContoller = new ProductController(container.get("ProductService")).router;