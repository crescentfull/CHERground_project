import * as express from 'express';

import { inject } from 'inversify'
import container from '../../../src/injector';
import { ImageService } from '../../../src/service';
import { ImageDto } from '../dto';

class ImageController {
    public router = express.Router();
    private imageService: ImageService;

    constructor(
        @inject("ImageService") imageService: ImageService
    ) {
        this.imageService = imageService

        this.router.get('/:id', (req: express.Request, res: express.Response, next) => {
            this.imageService.getImage(req.params.id)
            .then(image => {
                res.status(200).send(image);
            }).catch(err => {
                next(err);
            })
        })

        this.router.post('', (req: express.Request, res: express.Response, next) => {
            let image: ImageDto = req.body;

            this.imageService.saveImage(image)
            .then(image => {
                res.status(200).send({"MESSAGE" : "SUCCESS"});
            }).catch(err => {
                next(err);
            });
        
        this.router.patch('/:id', (req: express.Request, res: express.Response, next) => {
            let image: ImageDto = req.body;

            this.imageService.updateImage(image)
            .then(image => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            })

        })


        this.router.delete('', (req: express.Request, res: express.Response, next) => {
            this.imageService.deleteImage(req.params.id)
            .then(image => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            }).catch(err => {
                next(err);
            });
        })

        })
    }
}

export const imageController = new ImageController(container.get("ImageService")).router;