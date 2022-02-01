import React, { useState } from "react";
import Task from "./Task"





function TaskList({ tasks }) {

  const [tasksToDisplay, setTasks] = useState(tasks)

  const handleDelete = (event) => {
    const taskToDelete = event.target.parentNode
    const updatedList = tasksToDisplay.filter(task => task !== taskToDelete)
    // const updatedList = tasksToDisplay.filter(task => task.key !== key)
    setTasks(updatedList)
    console.log(event.target.parentNode)
  }

  return (
    <div className="tasks">
      {tasksToDisplay.map((task) => (
        <Task text={task.text} category={task.category} handleDelete={handleDelete} />
      )

      )}
    </div>
  );
}

export default TaskList;
