import { Router } from 'express';
import ListController from '../controllers/list.controller';

class ListRoutes {
    
    public router: Router = Router();

    constructor(){
        this.router.get('/', ListController.index);
        this.router.get('/:id/tasks', ListController.detail);
        this.router.post('/', ListController.create)
        this.router.put('/:id', ListController.update);
        this.router.delete('/:id', ListController.delete);

    }
}

export const listRoutes = new ListRoutes().router;
