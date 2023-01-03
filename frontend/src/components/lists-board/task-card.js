import React, { useState } from 'react'
import './task-card.css'
const TaskCard = ({ name, note, setShowForm, showForm, task, setTask, initialFormState, elm, setTaskEditMode, handleDeleteTaskClick }) => {
  const [showNote, setShowNote] = useState(false)

  return (
    <div className="list-card-details">
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <p >{name} </p>
        <button
          onClick={() => setShowNote(!showNote)}
      
        >
          {showNote ? '▲' : '▼'}
        </button>
        <div>
          <img
  
            onClick={() => {
              setTaskEditMode(true)
              setShowForm(!showForm);
              setTask({ ...elm });
            }}
            src="https://cdn-icons-png.flaticon.com/512/32/32355.png"
            alt='icon'

          />
        </div>

        <div>
          <img
            onClick={() => {
              handleDeleteTaskClick(elm._id)
            }}
            alt='icon'
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"

          />
        </div>
      </div>

      {showNote && <p>{note}</p>}
    </div>
  )
}

export default TaskCard
