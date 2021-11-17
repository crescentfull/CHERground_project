import * as express from 'express';

import { inject } from 'inversify'
import container from '../../../src/injector';
import { ProductCategoryService } from '../../../src/service';
import { ProductCategoryDto } from '../dto';

import { auth } from "../../middleware/index"

class ProductCategoryController {
    public router = express.Router();
    private productCategoryService: ProductCategoryService;

    constructor(
        @inject("ProductCategoryService") productCategoryService: ProductCategoryService
    ) {
        this.productCategoryService = productCategoryService

        this.router.get('/:id', (req: express.Request, res: express.Response, next) => {
            this.productCategoryService.getProductCategory(req.params.id)
            .then(productCategory => {
                res.status(200).send(productCategory);
            }).catch(err => {
                next(err);
            })
        })

        this.router.post('', auth, (req: express.Request, res: express.Response, next) => {
            let productCategory: any = req.body;
            const userInfo:any = req.decoded;
            const userClearance = userInfo.clearance;
            this.productCategoryService.saveProductCategory(productCategory, userClearance)
            .then(productCategory => {
                res.status(200).send({"MESSAGE" : "SUCCESS"});
            }).catch(err => {
                next(err);
            });
        })
        
        this.router.patch('/:id', (req: express.Request, res: express.Response, next) => {
            let productCategory: ProductCategoryDto = req.body;

            this.productCategoryService.updateProductCategory(productCategory)
            .then(productCategory => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            })

        })

        this.router.delete('/:id', auth, (req: express.Request, res: express.Response, next) => {
            const userInfo:any = req.decoded;
            const userClearance = userInfo.clearance;
            this.productCategoryService.deleteProductCategory(req.params.id, userClearance)
            .then(productCategory => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            }).catch(err => {
                next(err);
            });
        })
    }
}

export const productCategoryController = new ProductCategoryController(container.get("ProductCategoryService")).router;