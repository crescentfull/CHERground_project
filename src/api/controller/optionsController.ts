import * as express from 'express';

import { inject } from 'inversify'
import container from '../../../src/injector';
import { OptionsService } from '../../../src/service';
import { OptionsDto } from '../dto';

class OptionsController {
    public router = express.Router();
    private optionsService: OptionsService;

    constructor(
        @inject("OptionsService") optionsService: OptionsService
    ) {
        this.optionsService = optionsService

        this.router.get('/:id', (req: express.Request, res: express.Response, next) => {
            this.optionsService.getOptions(req.params.id)
            .then(options => {
                res.status(200).send(options);
            }).catch(err => {
                next(err);
            })
        })

        this.router.post('', (req: express.Request, res: express.Response, next) => {
            let options: OptionsDto = req.body;

            this.optionsService.saveOptions(options)
            .then(options => {
                res.status(200).send({"MESSAGE" : "SUCCESS"});
            }).catch(err => {
                next(err);
            });
        
        this.router.patch('/:id', (req: express.Request, res: express.Response, next) => {
            let options: OptionsDto = req.body;

            this.optionsService.updateOptions(options)
            .then(options => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            })

        })


        this.router.delete('', (req: express.Request, res: express.Response, next) => {
            this.optionsService.deleteOptions(req.params.id)
            .then(options => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            }).catch(err => {
                next(err);
            });
        })

        })
    }
}

export const optionsController = new OptionsController(container.get("OptionsService")).router;