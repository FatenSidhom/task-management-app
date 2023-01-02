import React, { useState } from 'react'
import './add-task-form.css';

const AddTaskForm = props => {
  const initialFormState = { id: null, name: '', note: '' }
  const [task, setTask] = useState(initialFormState)
  const [showForm, setShowForm] = useState(false) // new state variable to track visibility of form

  const handleInputChange = event => {
    const { name, value } = event.target
    setTask({ ...task, id: 0, [name]: value })
  }

  return (
    <div>
      <div onClick={() => setShowForm(!showForm)}>+ new task</div>
      { showForm ? ( // if showForm is true, render the form
        <div className="side-menu">
          <form
            className="addTask"
            onSubmit={event => {
              event.preventDefault()
              if (!task.name) return
  
              props.addTask(task)
              setTask(initialFormState)
              setShowForm(false) // close the form after it is submitted
            }}
          >
			<div className='input-box'>
				<p>task name</p>
            <input
              type="text"
              name="name"
              placeholder="Task title"
              value={task.name}
              onChange={handleInputChange}
              className="form__input"
            />
				<p>task note</p>
            <input
              type="text"
              name="note"
              placeholder="Task note"
              value={task.note}
              onChange={handleInputChange}
              className="form__input"
            />
            <button>Add</button> </div>
          </form>
        </div>
      ) : null }
    </div>
  )
}

export default AddTaskForm
