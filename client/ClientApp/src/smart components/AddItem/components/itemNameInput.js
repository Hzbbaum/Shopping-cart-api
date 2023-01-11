import React from "react";
import {Input} from "reactstrap";

export default function ItemNameInput(props) {
  return (
      <Input
        type="text"
        placeholder="שם המוצר"
        aria-label="מוצר המוסף לרשימה"
        onChange={props.itemNameChangeHandler}
        value={props.itemName}
      />
  );
}
