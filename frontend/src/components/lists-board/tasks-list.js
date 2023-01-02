import React, { useState, useEffect } from 'react'
import API from '../../helper/api';
import TaskCard from './task-card'
import AddTaskForm from './add-task-form';

const TasksList = List => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        API.lists.getTasksOfList(List.list._id)
        .then(result => {
            setTasks(result);  
        });
    }, [List.list._id])

       
	const addTask = task => {
        task.list = List.list._id;
        API.tasks.createTask(task)
        .then(taskRes => {
            setTasks([ ...tasks, taskRes ])
        });
	}

    if(!tasks) {
        return <div>Loading...</div>
    }

    console.log(List);

    return(
        <div className="list-wrapper">
            <h5 className="list-header">{List.list.name}</h5>
            <div className="list-cards">
                {tasks.map(elm => <TaskCard key={elm._id} name={elm.name} note={elm.note}/> )}
            </div>
            <AddTaskForm  addTask={addTask}/>
        </div>
    )
}
export default TasksList
