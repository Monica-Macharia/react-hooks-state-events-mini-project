import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks ]= useState("TASKS");
  const [category, setCategory]= useState('All');

  function addTask(newProduct){
    setTasks([...tasks, newProduct]);
  }
  
  function deleteText(deleted){
    setTasks(tasks.filter((task)=>task.text !== deleted))
  }


  function appTasks(){
    tasks.filter((task)=>category === "All");
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter allCategory = {CATEGORIES} userCategory = {category}
      stateCategory= {setCategory}/>
      <NewTaskForm allCategory={CATEGORIES.filter((section) => section !== "All")}
          onTaskFormSubmit={addTask}/>
      <TaskList textDelete = {deleteText} taks = {appTasks}  />
    </div>
  );
}

export default App;
