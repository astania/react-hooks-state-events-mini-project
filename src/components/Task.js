import React from "react";
import { v4 as uuid } from "uuid";

function Task({text, category, key, handleDelete}) {

  return (
    <div className="task" key={uuid()}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
