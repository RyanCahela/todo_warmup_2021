import React from "react";

function TodoItem(props) {
  const { value } = props;
  return <li>{value}</li>;
}

export default TodoItem;
