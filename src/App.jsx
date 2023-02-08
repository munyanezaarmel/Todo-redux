import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import CompletedTodoList from "./components/CompletedTodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "armel", completed: false },
    { id: 2, text: "munyaneza", completed: false },
    { id: 3, text: "redux", completed: false }
  ]);

  const addTodo = text => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos.filter(todo => !todo.completed)} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <CompletedTodoList todos={todos.filter(todo => todo.completed)} />
    </div>
  );
};

export default App;
