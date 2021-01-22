import React, { useState, useEffect } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import CreateTodo from "components/CreateTodo/CreateTodo";
import TodoList from "components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const localStorageLabel = "todos";

  //on todos change
  useEffect(() => {
    saveToLocalStorage(todos);
  }, [todos]);

  //on initial load
  useEffect(() => {
    checkLocalStorage(localStorageLabel);
  }, []);

  function addTodo(todo) {
    const newTodos = todos.slice();
    newTodos.push(todo);
    setTodos(newTodos);
  }

  function checkLocalStorage(label) {
    if (!localStorage.getItem(label)) return;
    const json = localStorage.getItem(label);
    setTodos(JSON.parse(json));
  }

  function saveToLocalStorage(arrayOfTodos) {
    if (arrayOfTodos.length === 0) return;
    if (localStorage.getItem(localStorageLabel)) {
      removeFromLocalStorage(localStorageLabel);
    }
    const json = JSON.stringify(arrayOfTodos);
    localStorage.setItem(localStorageLabel, json);
    return arrayOfTodos;
  }

  function removeFromLocalStorage(label) {
    if (!localStorage.getItem(label)) return;
    localStorage.removeItem(label);
  }

  return (
    <div className="App">
      <Header />
      <CreateTodo addTodo={addTodo} />
      <TodoList todos={todos} />
      <Footer />
    </div>
  );
}

export default App;
