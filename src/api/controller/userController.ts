import * as express from 'express';

import { inject } from 'inversify';
import container from '../../injector';

import { UserDto } from '../dto';
import { UserService } from 'src/service';

class UserController {
    public router = express.Router();
    private userService: UserService;

    constructor (
        @inject("UserSerivce") userService: UserService
    ) {
        this.userService = userService;

        this.router.get('/id/:id', (req: express.Request, res: express.Response, next) => {
            this.userService.getUserById(req.params.id)
            .then(user => {
                res.status(200).send(user);
            }).catch(err => {
                next(err);
            }); 
        });

        this.router.post('/login', (req: express.Request, res: express.Response, next) => {
            let loginInfo: UserDto = req.body;

            this.userService.getUser(loginInfo)
            .then(user => {
                res.status(200).send(user);
            }).catch(err => {
                next(err);
            });
        });

        this.router.post('/register', async (req: express.Request, res: express.Response, next) => {
            let user: UserDto = req.body;
            this.userService.saveUser(user)
            .then(user => {
                res.status(200).send(user);
            }).catch(err => {
                next(err);
            });
        });
    }
}

export const userController = new UserController(container.get("UserService")).router;