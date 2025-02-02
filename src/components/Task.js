import React from "react";

function Task({text, category, textDelete}) {

  function eventDelete(){
    textDelete(text);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick = {eventDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
