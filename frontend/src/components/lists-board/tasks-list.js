import React, { useState, useEffect } from 'react'
import API from '../../helper/api';
import TaskCard from './task-card'
import AddTaskForm from './add-task-form';
import './task-list.css';

const TasksList = List => {
  const [tasks, setTasks] = useState([]);
  const [listName, setListName] = useState(List.list.name); // new state variable to store the new list name
  const [editMode, setEditMode] = useState(false); // new state variable to toggle the visibility of the input field
  const handleDeleteClick = async event => {
    event.preventDefault();
    const listId = event.target.dataset.listId;
    try {
      const response = await API.lists.deleteList(listId);
      console.log('Deleted list', response);
      // Optionally, you can also remove the deleted list from the component's state
    } catch (error) {
      console.error(error);
    }
  };
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
        setTasks([...tasks, taskRes])
      });
  }

  if (!tasks) {
    return <div>Loading...</div>
  }

  console.log(List);

  const updateListName = () => { // new function to update the list name
    API.lists.updateList(List.list._id, { name: listName }) // call the API to update the list name on the backend
      .then(() => {
        setEditMode(false); // toggle the visibility of the input field
      });
  }

  return (
    <div className="list-wrapper">
      {editMode ? (
        <input
          type="text"
          value={listName}
          onChange={event => setListName(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              updateListName();
            }
          }}
        />
      ) : (
          <h5
            className="list-header"
            onClick={() => setEditMode(true)}
          >
            {listName}
          </h5>
        )}
      <button data-list-id={List.list._id} onClick={handleDeleteClick}>delete
      </button>
      <div className="list-cards">
        {tasks.map(elm => <TaskCard key={elm._id} name={elm.name} note={elm.note} />)}
      </div>
      <AddTaskForm addTask={addTask} />
    </div>
  )
}
export default TasksList
