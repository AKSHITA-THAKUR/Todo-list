import { useState , useEffect } from "react";
import React from "react";
import AddTo from "./Components/AddTo"
import ListToDo from "./Components/ListToDo"
import "./App.css";


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

    <AddTo
      newTask={newTask}
      setNewTask={setNewTask}
      addTask={addTask}
    
    />

      {/*display todo*/}
      {toDo && toDo.length ? "" : "No tasks.."}
    <ListToDo
     toDo={toDo}
     markDone={markDone}
     deleteTask={deleteTask}
    
    />
    </div>
  );
}

export default App;
