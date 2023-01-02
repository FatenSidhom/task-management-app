import React, { useState } from 'react'

const TaskCard = ({ name, note, setShowForm, showForm, task, setTask, initialFormState, elm, setTaskEditMode, handleDeleteTaskClick }) => {
  const [showNote, setShowNote] = useState(false)

  return (
    <div className="list-card-details">
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <p>{name} </p>
         <button
          onClick={() => setShowNote(!showNote)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            outline: 'none',
            fontSize: '0.9em',
            color:'black',
          }}
        >
          {showNote ? '▲' : '▼'}
        </button>
        <div>
          <img
            style={{ width: 30, height: 25, objectFit: "contain", cursor: "pointer" }}
            onClick={() => {
              setTaskEditMode(true)
              setShowForm(!showForm);
              setTask({ ...elm });
            }}
            src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png"

          />
        </div>

        <div>
          <img
            style={{ width: 20, height: 23, objectFit: "contain", cursor: "pointer" }}
            onClick={() => {
              handleDeleteTaskClick(elm._id)
            }}
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"

          />
        </div>
      </div>

      {showNote && <p>{note}</p>}
    </div>
  )
}

export default TaskCard
