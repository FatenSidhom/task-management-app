import { Request, Response } from 'express';
import { list } from "../models/list.model";
import { task } from '../models/task.model';

class ListController {

    public async index(req: Request, res: Response) {

        try{

            const lists: Array<Object>  = await list.find();

            if(lists) {
                res.json(lists);
            }else{
                res.sendStatus(404);
            }

        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    }

    public async detail(req: Request, res: Response) {

        try{
            const tasks: Array<Object>  = await task.find({
                list: req.params.id
            });

            if(tasks) {
                res.json(tasks);
            }else{
                res.sendStatus(404);
            }

        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
    public async create(req: Request, res: Response) {

        try {

            const newList = new list(req.body);
            await newList.save();

            res.json(newList);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }
    public async update(req: Request, res: Response) {
        try {
          // Find the list by its ID and update its name
          const updatedList = await list.findByIdAndUpdate(
            req.params.id,
            { $set: { name: req.body.name } },
            { new: true }
          );
      
          if (!updatedList) {
            return res.status(404).send('List not found');
          }
      
          res.json(updatedList);
        } catch (error) {
          console.log(error);
          res.sendStatus(500);
        }
      }
    
      
      public async delete(req: Request, res: Response) {
        try {
          // Delete all tasks associated with this list
          await task.deleteMany({ list: req.params.id });
      
          // Delete the list itself
          const deletedList = await list.findByIdAndDelete(req.params.id);
      
          if (!deletedList) {
            return res.status(404).send('List not found');
          }
      
          res.send('List deleted successfully');
        } catch (error) {
          console.log(error);
          res.sendStatus(500);
        }
      }
      
}

export default new ListController;