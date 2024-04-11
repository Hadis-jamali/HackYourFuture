import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

const GithubContext = createContext();
function UserList({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchUsers = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      setUserData(response.data.items);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <GithubContext.Provider value={{ userData, loading, error, searchUsers }}>
        {children}
      </GithubContext.Provider>
    </div>
  );
}

export { UserList, GithubContext };