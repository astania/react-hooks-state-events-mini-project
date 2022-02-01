import React from "react";

function NewTaskForm({ addTask, categories }) {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" onSubmit={addTask}/>
    </form>
  );
}

export default NewTaskForm;
