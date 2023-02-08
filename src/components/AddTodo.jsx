// AddTodo Component
import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTodo;