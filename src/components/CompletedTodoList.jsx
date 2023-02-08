import React from "react";
import { connect } from "react-redux";

const CompletedTodo = ({ todo, deleteTodo }) => {
  return (
    <div className="completed-todo">
      <p className="completed">{todo.text}</p>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

const CompletedTodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="completed-todo-list">
      <h2>Completed Tasks</h2>
      {todos.map(todo => (
        <CompletedTodo
          key={todo.id}
          todo={todo}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos.filter(todo => todo.completed)
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch({ type: "DELETE_TODO", id })
});

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTodoList);
