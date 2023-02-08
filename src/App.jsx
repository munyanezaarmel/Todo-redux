import React from "react";
import { connect } from "react-redux";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import CompletedTodoList from "./components/CompletedTodoList";

const App = ({ todos }) => {
  return (
    <div className="app">
      <AddTodo />
      <TodoList todos={todos.filter(todo => !todo.completed)} />
      <CompletedTodoList todos={todos.filter(todo => todo.completed)} />
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
