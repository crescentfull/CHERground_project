import * as express from 'express';

import { inject } from 'inversify'
import container from '../../../src/injector';
import { StatusService } from '../../../src/service';
import { StatusDto } from '../dto';

class StatusController {
    public router = express.Router();
    private statusService: StatusService;

    constructor(
        @inject("StatusService") statusService: StatusService
    ) {
        this.statusService = statusService

        this.router.get('/:id', (req: express.Request, res: express.Response, next) => {
            this.statusService.getStatus(req.params.id)
            .then(status => {
                res.status(200).send(status);
            }).catch(err => {
                next(err);
            })
        })

        this.router.post('', (req: express.Request, res: express.Response, next) => {
            let status: StatusDto = req.body;

            this.statusService.saveStatus(status)
            .then(status => {
                res.status(200).send({"MESSAGE" : "SUCCESS"});
            }).catch(err => {
                next(err);
            });
        
        this.router.patch('/:id', (req: express.Request, res: express.Response, next) => {
            let status: StatusDto = req.body;

            this.statusService.updateStatus(status)
            .then(status => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            })

        })


        this.router.delete('', (req: express.Request, res: express.Response, next) => {
            this.statusService.deleteStatus(req.params.id)
            .then(status => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            }).catch(err => {
                next(err);
            });
        })

        })
    }
}

export const statusController = new StatusController(container.get("StatusService")).router;