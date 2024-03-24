import React, { useState } from "react";

const CallbackExercise = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", comment: "", completed: false },
    { id: 2, text: "Do laundry", comment: "", completed: false },
    { id: 3, text: "Clean bathroom", comment: "", completed: false },
  ]);

  function deleteTodo(id) {
    const deleteToDoList = [...todos].filter((todo) => todo.id !== id);
    setTodos(deleteToDoList);
  }
  function checkTodo(id) {
    const checkToDoList = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(checkToDoList);
  }
 
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <SubComponent todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo} />
        ))}
      </ul>
    </div>
  );
};

const SubComponent = ({ todo, deleteTodo, checkTodo }) => {
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={(checked) => {
            checkTodo(todo.id)
        }}
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
      <input type="text" value={todo.comment} onChange={(comment) => {}} />
      <button
        onClick={(props) => {
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default CallbackExercise;
