import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectList } from "../listSlice";
import { InputGroup } from "reactstrap";
import { addItemToCategory as addItemToCategoryInStore } from "../listSlice";
import CategoryRadioInput from "./components/categoryRadioInput";
import ItemNameInput from "./components/itemNameInput";
import SubmitItemToList from "./components/submitItemToList";

// displays the item count and adds items to a category
export default function AddItemForm() {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const [chosenCategory, setchosenCategory] = useState(null);
  const list = useSelector(selectList);

  function addItemToCategory(e) {
    e.preventDefault();
    if (chosenCategory !== null && itemName !== "") {
      dispatch(
        addItemToCategoryInStore({
          categoryName: chosenCategory,
          itemName: itemName,
        })
      );
      setItemName("");
      setchosenCategory(null);
    }
  }

  function updateSelectedCategoryHandler(value) {
    setchosenCategory(value);
  }

  function handleChange(e) {
    setItemName(e.target.value);
  }

  return (
    <form onSubmit={addItemToCategory}>
      <InputGroup>
        <ItemNameInput
          itemName={itemName}
          itemNameChangeHandler={handleChange}
        />
        <SubmitItemToList
          shouldDisable={chosenCategory === null || itemName === ""}
        />
      </InputGroup>
      <CategoryRadioInput
        list={list}
        selectedCategory={chosenCategory}
        updateCategoryHandler={updateSelectedCategoryHandler}
      />
    </form>
  );
}
