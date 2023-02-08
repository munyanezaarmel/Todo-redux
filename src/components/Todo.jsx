import React from "react";

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo">
      <input type="checkbox" onClick={toggleTodo} />
      <p className={todo.completed ? "completed" : ""}>{todo.text}</p>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default Todo;