import React, { useContext, useState } from "react";

import { GithubContext } from "./UserList";

function GithubSearch() {
  const { userData, loading, error, searchUsers } = useContext(GithubContext);
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    searchUsers(query);
  };
  return (
    <div>
      <h1 className="title">GitHub users search</h1>

      <input type="text" value={query} onChange={handleChange} />

      {loading && <p>Loading...</p>}
      {error && <p>Error fetching {error}</p>}
      {!loading && !error && userData && userData.length === 0 && <p>No results...</p>}
      {userData && userData.length > 0 && (
        <ul>
          {userData.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GithubSearch;
