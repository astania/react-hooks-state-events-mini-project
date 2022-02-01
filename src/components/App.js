import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState([TASKS])

  const addTask = (event) => {
    event.preventDefault()
    console.log(event)

    // setTasks([...tasks, task])
  }

  const filterByCategory = (event) => {
    const buttonCategory = event.target
    if(buttonCategory.className === 'selected'){
      buttonCategory.removeAttribute('class')
    } else{
      buttonCategory.classList.add("selected")
    }

   

    if(buttonCategory.textContent === "All"){
      setTasks(tasks)
      console.log(buttonCategory.textContent)
    } else{
      const filteredTasks = tasks.filter(task => task.category === buttonCategory.textContent)
      setTasks(filteredTasks)
      console.log(buttonCategory.textContent)
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterByCategory={filterByCategory} />
      <NewTaskForm addTask={addTask} categories={CATEGORIES}/>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
