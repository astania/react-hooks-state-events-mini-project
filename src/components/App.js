import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  let [selectedCategory, setSelectedCategory] = useState("All")

  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const filterByCategory = (event) => {

    const buttonCategory = event.target
    console.log(selectedCategory)


    if (buttonCategory.className === 'selected') {
      setSelectedCategory("All")
      setTasks(TASKS)
    } else {
      if (buttonCategory.textContent === "All") {
        setTasks(TASKS)
        console.log(buttonCategory.textContent)
      } else {
        let filteredTasks = TASKS.filter(task => task.category === buttonCategory.textContent)
        setTasks(filteredTasks)
        console.log(buttonCategory.textContent)
      }
      setSelectedCategory(buttonCategory.textContent)
    }

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterByCategory={filterByCategory} selectedCategory={selectedCategory} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
