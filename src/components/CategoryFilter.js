import React from "react";

function CategoryFilter({categories, onclick, selected}) {
  function handleClick(e) {
    onclick(e.target.value);
  }
  const cats = categories.map((cat) => 
  <button onClick={handleClick} className={(selected === cat ? "selected" : "")} value={cat} key={cat}>{cat}</button>);
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {cats}
    </div>
  );
}

export default CategoryFilter;
