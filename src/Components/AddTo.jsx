import React from 'react'

function AddTo({newTask , setNewTask , addTask }) {
  return (
    <div>
        {/* Form for add task*/}
        <div className="row">
        <div className="col"></div>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="addwork"
        />
        <div className="auto">
          <button onClick={addTask} className="btn">
            {" "}
            AddTask
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddTo
