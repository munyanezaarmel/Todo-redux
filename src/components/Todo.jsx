// Todo.js
import React from 'react';
import { connect } from 'react-redux';

const Todo = ({ todo, dispatch }) => {
  const handleCheckbox = () => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: todo.id,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_TODO',
      payload: todo.id,
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckbox}
      />
      <p style={{ margin: '0 10px' }}>{todo.todo}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default connect()(Todo);
