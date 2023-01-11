import React from "react";

// displays a list of catagories and returns the chosen one
export default function CategoryRadioInput(props) {
  const categoryButtons = props.list.map((category, idx) => (
    <React.Fragment key={category.name}>
      <input
        className="btn-check"
        id={category.name}
        value={category.name}
        name="category selector"
        type="radio"
        checked={props.chosenCategory === category.name}
        onChange={updateCategory}
      />
      <label className="btn btn-outline-primary" htmlFor={category.name}>
        {category.name}
      </label>
    </React.Fragment>
  ));

  function updateCategory(e) {
    props.updateCategoryHandler(e.target.value);
  }

  return (
    <fieldset className="relative flex w-full">
      {props.chosenCategory}
      <legend>בחר קטגוריה להוספת מוצר:</legend>
      <div className="btn-group" role="group">
        {categoryButtons}
      </div>
    </fieldset>
  );
}
