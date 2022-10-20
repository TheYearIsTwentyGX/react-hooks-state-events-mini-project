import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [categories, setCategories] = useState("All");
  const [filteredCat, setFilteredCat] = useState();
  function handleFilterChange(category) {
    setFilteredCat(category);
    setCategories(category);
  }

  function handleDeleteTask(task) {
    setTaskList(taskList.filter((t) => t.text !== task));
  }

  function handleAddTask(task) {
    setTaskList([...taskList, task]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onclick={handleFilterChange} selected={filteredCat} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={taskList} categories={categories} onDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;
