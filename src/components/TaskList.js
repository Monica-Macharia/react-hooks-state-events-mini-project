import React from "react";
import Task from './Task';

function TaskList({tasks, textDelete}) {
  let taskList = 
    tasks.map((task)=>(
      <Task
      key={task.text}
      text={task.text}
      category={task.category}
      textDelete={textDelete}
      />
  ))
  return (
    <div className="tasks">{taskList}

      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
