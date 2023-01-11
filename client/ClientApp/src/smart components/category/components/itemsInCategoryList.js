import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Col,
} from "reactstrap";

// renders a list from a category item
export default function ItemsInCategoryList(props) {
  const listItems = props.items.map((item) => (
    <ListGroupItem key={item.name}>
      {item.name}:{item.count}
    </ListGroupItem>
  ));
  return (
    <Col xs="12" sm="6" md="4" lg="3">
      <ListGroup flush>
        <ListGroupItemHeading>{props.name}</ListGroupItemHeading>
        {listItems}
      </ListGroup>
    </Col>
  );
}
