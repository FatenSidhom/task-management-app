import React, { useState, useEffect } from 'react'
import API from '../../helper/api';
import TaskCard from './task-card'
import AddTaskForm from './add-task-form';
import './task-list.css';

const TasksList = List => {
  const [tasks, setTasks] = useState([]);
  const [listName, setListName] = useState(List.list.name); // new state variable to store the new list name
  const [editMode, setEditMode] = useState(false); // new state variable to toggle the visibility of the input field
  const [taskEditMode, setTaskEditMode] = useState(false); // new state variable to toggle the visibility of the input field
  const [showForm, setShowForm] = useState(false)

  const initialFormState = { id: null, name: '', note: '' }
  const [task, setTask] = useState(initialFormState)


  const handleDeleteClick = async event => {
    event.preventDefault();
    const listId = event.target.dataset.listId;

    API.lists.deleteList(listId).then(() => {
      window.location.reload();
    });
    // Optionally, you can also remove the deleted list from the component's state

  };

  const handleDeleteTaskClick = async taskId => {
    API.tasks.deleteTask(taskId).then(() => {
      window.location.reload();
    });
    // Optionally, you can also remove the deleted list from the component's state

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

  const editTask = task => {
    task.list = List.list._id;
    API.tasks.updateTask(task._id, task)
      .then(taskRes => {
        window.location.reload();
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
      <button data-list-id={List.list._id} onClick={handleDeleteClick}>X
      </button>

      <div className="list-cards">
        {tasks.map(elm => <TaskCard
          key={elm._id}
          name={elm.name}
          note={elm.note}
          elm={elm}
          showForm={showForm}
          setShowForm={setShowForm}
          initialFormState={initialFormState}
          task={task}
          setTaskEditMode={setTaskEditMode}
          handleDeleteTaskClick={handleDeleteTaskClick}
          setTask={setTask} />)}
      </div>
      <AddTaskForm
        initialFormState={initialFormState}
        task={task}
        setTask={setTask}
        showForm={showForm}
        setShowForm={setShowForm}
        addTask={addTask}
        editTask={editTask}
        setTaskEditMode={setTaskEditMode}
        taskEditMode={taskEditMode}
      />
    </div>
  )
}
export default TasksList
