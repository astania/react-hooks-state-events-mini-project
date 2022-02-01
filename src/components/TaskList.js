import React, { useState } from "react";
import Task from "./Task"





function TaskList({ tasks }) {

  const [tasksToDisplay] = useState(tasks)

  const handleDelete = (event) => {
    const taskToDelete = event.target.parentNode
    taskToDelete.remove()
  }

  return (
    <div className="tasks">
      {tasksToDisplay.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete} />
      )

      )}
    </div>
  );
}

export default TaskList;
