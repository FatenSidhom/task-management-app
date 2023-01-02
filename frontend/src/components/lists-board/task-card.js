import React, { useState } from 'react'

const TaskCard = ({ name, note }) => {
  const [showNote, setShowNote] = useState(false)

  return (
    <div className="list-card-details">
      <p>{name}  <button
          onClick={() => setShowNote(!showNote)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            outline: 'none',
            fontSize: '0.9em',
          }}
        >
        {showNote ? '▲' : '▼'}
      </button></p>
      
      {showNote && <p>{note}</p>}
    </div>
  )
}

export default TaskCard
