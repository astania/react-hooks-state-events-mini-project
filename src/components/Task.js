import React from "react";

function Task({text, category, id}) {
  return (
    <div className="task" key={id}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
