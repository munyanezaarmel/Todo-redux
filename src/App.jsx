// App.js
import React from 'react';
import AddTodo from './components/AddTodo';
import UncompletedTodos from './components/UncompletedTodos';
import CompletedTodos from './components/CompletedTodos';

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ width: '50%' }}>
      <AddTodo />
      <UncompletedTodos />
      <CompletedTodos />
    </div>
  </div>
);

export default App
