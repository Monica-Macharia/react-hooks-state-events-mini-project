import React from "react";

function CategoryFilter({allCategory,userCategory, stateCategory }) {
  const clickables = allCategory.map((category)=>{
    const className = category ===userCategory? "selected" : null;
    return (
      <button 
      key={category} className={className} onClick={()=>stateCategory(category)}
    > {category}</button>);
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {clickables}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
