import React from "react";

import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import { selectList } from "../listSlice";
import ItemsInCategoryList from "./components/itemsInCategoryList";

// displays lists of catagories and their items
export default function Category() {
  const list = useSelector(selectList);
  const categoryItems = list.map((category) => (
    <ItemsInCategoryList
      key={category.name}
      items={category.items}
      name={category.name}
    ></ItemsInCategoryList>
  ));

  return (
    <Container>
      <Row>{categoryItems}</Row>
    </Container>
  );
}
