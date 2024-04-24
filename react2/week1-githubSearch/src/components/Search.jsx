import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";
function Search() {
  const [search, setSearch] = useState([]);
  const searchHandler = () => {
    if (search) {
      let searchMeals = {
        data: meals.data,
      };
      searchMeals.data = meals.data.filter((meal) => {
        return meal.title.toLowerCase().includes(search);
      });
      setMeals(searchMeals);
    } else {
      setMeals(meals);
    }
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <FaSearch />
      </button>
    </div>
  );
}

export default Search;
