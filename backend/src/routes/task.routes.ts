import { Router } from 'express';
import { Request, Response } from 'express';
import { task } from "../models/task.model";
import TaskController from '../controllers/task.controller';

class TaskRoutes {
    
    public router: Router = Router();

    constructor(){
        this.router.post('/', TaskController.create);
        this.router.put('/:id', TaskController.update);
        this.router.delete('/:id', TaskController.delete);
        
    }

}

export const taskRoutes = new TaskRoutes().router;

