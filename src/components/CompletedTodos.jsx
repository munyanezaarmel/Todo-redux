
import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const CompletedTodos = ({ todos }) => (
  <div>
    <h2>Completed Todos</h2>
    {todos
      .filter(todo => todo.completed)
      .map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(CompletedTodos);
