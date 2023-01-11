import React from "react";
import { Input } from "reactstrap";

function SubmitItemToList(props) {
  return (
    <Input
      disabled={props.shouldDisable}
      type="submit"
      aria-roledescription="submit"
      value="הוסף לעגלה"
    />
  );
}

export default SubmitItemToList;
