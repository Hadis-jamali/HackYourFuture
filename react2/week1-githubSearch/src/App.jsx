import { UserList } from "./components/UserList";
import GithubSearch from "./components/GithubSearch";
import "./App.css";

function App() {
  return (
    <UserList>
      <GithubSearch />
    </UserList>
  );
}

export default App;
