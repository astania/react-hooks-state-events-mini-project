import React from "react";

function CategoryFilter({ categories, filterByCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button key={category} onClick={filterByCategory}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
