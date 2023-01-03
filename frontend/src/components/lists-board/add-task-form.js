import './add-task-form.css';

const AddTaskForm = ({ addTask, setShowForm, showForm, task, setTask, initialFormState, taskEditMode, setTaskEditMode, editTask }) => {

  // new state variable to track visibility of form

  const handleInputChange = event => {
    const { name, value } = event.target
    setTask({ ...task, id: 0, [name]: value })
  }

  return (
    <div>
      <div onClick={() => { setShowForm(!showForm); setTask(initialFormState); setTaskEditMode(false) }}>+ new task</div>
      {showForm ? ( // if showForm is true, render the form
        <div className="side-menu">
          <form
            className="addTask"
            onSubmit={event => {
              event.preventDefault()
              if (!task.name) return
              if (taskEditMode) {
                editTask(task)
              } else {
                addTask(task)
              }

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
              <button>{taskEditMode ? "Update" : "Add"}</button> </div>
          </form>
        </div>
      ) : null}
    </div>
  )
}

export default AddTaskForm
