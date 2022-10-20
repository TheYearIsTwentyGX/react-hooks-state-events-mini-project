import React from "react";
import Task from "./Task";

function TaskList({tasks, categories, onDelete}) {
  const taskList = tasks.map((task) => {
    return (<Task key={tasks.indexOf(task)} text={task.text} category={task.category} onClick={onDelete} />)})
    .filter((task) => {
      if (categories !== "All" && task.props.category !== categories) {
        return false;
      }
      return true;
    });
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
