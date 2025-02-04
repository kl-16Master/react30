import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setToDos] = useState([]);
  const [inputValue, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    if (inputValue.trim()) {
      setToDos([...todos, inputValue]);
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange} // Corrected from onClick to onChange
          placeholder="Add new Task!"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
