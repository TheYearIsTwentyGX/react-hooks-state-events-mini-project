import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  console.log(categories);
  const cats = categories.map(cat => { return (<option key={cat} value={cat}>{cat}</option>) });

  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("Code");
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { text: details, category: category };
    onTaskFormSubmit(newTask);
  }

  function handleDetailChange(e) {
    setDetails(e.target.value);
  }

  function handleCatChange(e) {
    setCategory(e.target.value);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCatChange}>
          {cats}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
