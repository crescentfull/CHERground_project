import * as express from 'express';

import { inject } from 'inversify'
import container from '../../injector';
import { CategoryService } from 'src/service';
import { CategoryDto } from '../dto';

import { auth } from "../../middleware/index"

class CategoryController {
    public router = express.Router();
    private categoryService: CategoryService;

    constructor(
        @inject("CategoryService") categoryService: CategoryService
    ) {
        this.categoryService = categoryService

        this.router.get('/:id', auth, (req: express.Request, res: express.Response, next) => {
            const userInfo:any = req.decoded;
            const userClearance = userInfo.clearance;
            this.categoryService.getCategory(req.params.id, userClearance)
            .then(category => {
                res.status(200).send(category);
            }).catch(err => {
                next(err);
            })
        })

        this.router.get('', (req: express.Request, res: express.Response, next) => {
            this.categoryService.getCategoryList()
            .then(category => {
                res.status(200).send(category);
            }).catch(err => {
                next(err);
            })
        })

        this.router.post('', auth, (req: express.Request, res: express.Response, next) => {
            let category = req.body;
            const userInfo:any = req.decoded;
            const userClearance = userInfo.clearance;
            this.categoryService.saveCategory(category, userClearance)
            .then(category => {
                res.status(200).send(category);
            }).catch(err => {
                next(err);
            });
        })
        
        this.router.patch('/:id', (req: express.Request, res: express.Response, next) => {
            let category: CategoryDto = req.body;
            this.categoryService.updateCategory(category)
            .then(category => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            });
        })

        this.router.delete('/:id', (req: express.Request, res: express.Response, next) => {
            this.categoryService.deleteCategory(req.params.id)
            .then(category => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            }).catch(err => {
                next(err);
            });
        })
    }
}

export const categoryController = new CategoryController(container.get("CategoryService")).router;