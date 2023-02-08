import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      <h2>Uncompleted Tasks</h2>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={() => toggleTodo(todo.id)} deleteTodo={() => deleteTodo(todo.id)} />
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch({ type: "TOGGLE_TODO", id }),
  deleteTodo: id => dispatch({ type: "DELETE_TODO", id })
});

export default connect(null, mapDispatchToProps)(TodoList);