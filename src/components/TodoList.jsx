import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      <h2>Uncompleted Tasks</h2>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={() => toggleTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;