import React from "react";
import TodoItem from "components/TodoItem/TodoItem";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <TodoItem value={todo} />;
      })}
    </ul>
  );
}

export default TodoList;
