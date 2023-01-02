import { Request, Response } from 'express';
import { task } from "../models/task.model";

class TaskController {

    public async create(req: Request, res: Response) {

        try {

            const newTask= new task(req.body);
            await newTask.save();

            res.json(newTask);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }
    public async update(req: Request, res: Response) {
        try {
          const updatedTask = await task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      
          if (!updatedTask) {
            return res.status(404).send('Task not found');
          }
      
          res.send(updatedTask);
        } catch (error) {
          console.log(error);
          res.sendStatus(500);
        }
      }
      
    public async delete(req: Request, res: Response) {
        try {
          const deletedTask = await task.findByIdAndDelete(req.params.id);
          if (!deletedTask) {
            return res.status(404).send('Task not found');
          }
      
          res.send('Task deleted successfully');
        } catch (error) {
          console.log(error);
          res.sendStatus(500);
        }
      }
}




export default new TaskController;