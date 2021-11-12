import * as express from 'express';

import { inject } from 'inversify'
import container from '../../injector';
import { CategoryService } from 'src/service';
import { CategoryDto } from '../dto';

class CategoryController {
    public router = express.Router();
    private categoryService: CategoryService;

    constructor(
        @inject("CategoryService") categoryService: CategoryService
    ) {
        this.categoryService = categoryService

        this.router.get('/:id', (req: express.Request, res: express.Response, next) => {
            this.categoryService.getCategory(req.params.id)
            .then(category => {
                res.status(200).send(category);
            }).catch(err => {
                next(err);
            })
        })

        this.router.post('', (req: express.Request, res: express.Response, next) => {
            let category: CategoryDto = req.body;

            this.categoryService.saveCategory(category)
            .then(category => {
                res.status(200).send({"MESSAGE" : "SUCCESS"});
            }).catch(err => {
                next(err);
            });
        
        this.router.patch('/:id', (req: express.Request, res: express.Response, next) => {
            let category: CategoryDto = req.body;category

            this.categoryService.updateCategory(category)
            .then(category => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            })

        })


        this.router.delete('', (req: express.Request, res: express.Response, next) => {
            this.categoryService.deleteCategory(req.params.id)
            .then(category => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            }).catch(err => {
                next(err);
            });
        })

        })
    }
}

export const categoryController = new CategoryController(container.get("CategoryService")).router;