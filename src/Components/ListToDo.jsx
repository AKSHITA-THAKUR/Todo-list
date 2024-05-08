import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
function ListToDo( {toDo , markDone , deleteTask }) {
  return (
    <div>
      
    {toDo && toDo
        .sort((a, b) => (a.id > b.id ? 1 : -1)) // to sort the tasks
        .map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="taskbg">
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span
                    title="Completed / Not completed"
                    onClick={(e) => markDone(task.id)}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>

                  <span title="Delete" onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon className="dustbin" icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  )
}

export default ListToDo
