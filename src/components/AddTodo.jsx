// AddTodo.js
import React, { useState } from 'react';
import { connect } from 'react-redux';

const AddTodo = ({ dispatch }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: Date.now(),
        todo,
        completed: false,
      },
    });
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder="Add Todo"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default connect()(AddTodo);
