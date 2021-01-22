import React, { useState } from "react";

function CreateTodo(props) {
  const { addTodo } = props;
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  return (
    <>
      <h2>Create Todo</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="Task">Task</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}></input>
        <button type="submit">Create Todo</button>
      </form>
    </>
  );
}

export default CreateTodo;
