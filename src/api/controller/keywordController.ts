import * as express from 'express';

import { inject } from 'inversify'
import container from '../../../src/injector';
import { KeywordService } from '../../../src/service';
import { KeywordDto } from '../dto';

class KeywordController {
    public router = express.Router();
    private keywordService: KeywordService;

    constructor(
        @inject("KeywordService") keywordService: KeywordService
    ) {
        this.keywordService = keywordService

        this.router.get('/:id', (req: express.Request, res: express.Response, next) => {
            this.keywordService.getKeyword(req.params.id)
            .then(keyword => {
                res.status(200).send(keyword);
            }).catch(err => {
                next(err);
            })
        })

        this.router.post('', (req: express.Request, res: express.Response, next) => {
            let keyword: KeywordDto = req.body;

            this.keywordService.saveKeyword(keyword)
            .then(keyword => {
                res.status(200).send({"MESSAGE" : "SUCCESS"});
            }).catch(err => {
                next(err);
            });
        
        this.router.patch('/:id', (req: express.Request, res: express.Response, next) => {
            let keyword: KeywordDto = req.body;

            this.keywordService.updateKeyword(keyword)
            .then(keyword => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            })

        })


        this.router.delete('', (req: express.Request, res: express.Response, next) => {
            this.keywordService.deleteKeyword(req.params.id)
            .then(keyword => {
                res.status(200).send({"MESSAGE" : "SUCCESS"})
            }).catch(err => {
                next(err);
            });
        })

        })
    }
}

export const keywordController = new KeywordController(container.get("KeywordService")).router;