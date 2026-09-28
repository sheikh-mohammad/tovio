import React, { useState } from "react";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const todoHandler = (e) => {
    e.preventDefault();

    todos.push(inputValue);

    setTodos([...todos]);

    setInputValue("");

    console.log(todos);
  };

  const deleteAll = () => {
    setTodos([]);

    console.log(todos);
  };

  return (
    <>
      <h1>Tovio</h1>

      <form onSubmit={todoHandler}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Add</button>
        <button onClick={deleteAll} type="button">
          Delete All
        </button>
      </form>

      <div>
        <ul>
          {todos.map((value, index) => {
            return (
              <li key={index}>
                {value} <button>Edit</button>
                <button>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
