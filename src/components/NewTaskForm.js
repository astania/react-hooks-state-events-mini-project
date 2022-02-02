import React, { useState } from "react";

function NewTaskForm({ addTask, categories }) {
  const initialState = {
    text: "",
    category: ""
  }
  const[newTask, setNewTask] = useState(initialState)

  const handleTaskChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setNewTask({
      ...newTask,
      [name]: value,
    })
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    addTask(newTask)
    setNewTask(initialState)
  }
  
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTaskChange} value={newTask.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleTaskChange} value={newTask.category}>
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
