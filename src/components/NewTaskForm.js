import React, { useState } from "react";

function NewTaskForm({ addTask, categories }) {
  const[newTask, setNewTask] = useState({
    text: "",
    category: ""
  })

  const handleTaskChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setNewTask({
      ...newTask,
      [name]: value,
    })
  }

  
  
  return (
    <form className="new-task-form" onSubmit={addTask}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTaskChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleTaskChange}>
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
