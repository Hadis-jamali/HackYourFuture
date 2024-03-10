import { useState } from "react";
import "./App.css";
import UserList from "./UserList";

const App = () => {
  const users = [
    {
      name: "testy mc testy face",
      address: "test alley",
      age: 35,
      height: 185,
      languages: ["danish", "arabic"],
    },
    {
      name: "Ahmad Hansen",
      address: "test alley 2",
      age: 89,
      height: 167,
      languages: ["english", "polish"],
    },
    {
      name: "Peter Petersen",
      address: "alley 2",
      age: 19,
      height: 176,
      languages: ["english", "danish"],
    },
  ];

  return (
    <div>
      <h1>Users</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;
