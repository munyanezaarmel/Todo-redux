import React from "react";
import Todo from "./Todo";

const CompletedTodoList = ({ todos }) => {
  return (
    <div className="completed-todo-list">
      <h2>Completed Tasks</h2>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default CompletedTodoList;