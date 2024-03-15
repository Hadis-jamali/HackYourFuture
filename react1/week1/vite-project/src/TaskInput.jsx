import React, { useState } from "react";
import "../index.css";

function TaskInput() {
  const [toDoList, setToDoList] = useState([]);
  const [todo, setTodo] = useState("");

  console.log(todo);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setToDoList([...toDoList].concat(newTodo));
    setTodo("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Item.."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
      
    </div>
  );
}

export default TaskInput;