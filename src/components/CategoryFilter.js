import React from "react";

function CategoryFilter({ categories, filterByCategory, selectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button className={category === selectedCategory ? 'selected' : null} key={category} onClick={filterByCategory}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;

