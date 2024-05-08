import { useState , useEffect } from "react";
import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const getLocalItems = () => {
  const list = localStorage.getItem("lists");
  return list ? JSON.parse(list) : []; // Return an empty array if there's no data
};


function App() {
  //Main state to contain the values of all todo list
  const [toDo, setToDo] = useState(getLocalItems());
  
  const [newTask, setNewTask] = useState(''); 

  // Add task function
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };
  // delete task function
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };
  // Mark the task task function
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

//use Effect
 useEffect(()=> {
  localStorage.setItem('lists' , JSON.stringify(toDo) )
 }, [toDo]);

  return (
    <div className="Container App">
      <br></br>
      <h2 className="heading"> Todo List App </h2>
      <br></br>

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

      {/*display todo*/}
      {toDo && toDo.length ? "" : "No tasks.."}

      {toDo &&
        toDo
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
  );
}

export default App;
