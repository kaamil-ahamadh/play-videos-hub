import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchQuery = ({ userSearch, setUserSearch }) => {
  const handleChange = (event) => {
    setUserSearch(event.target.value);
  };

  const handleClickEnter = (event) => {
    if (event.key === "Enter") {
      console.log(userSearch);
    }
  };

  return (
    <div>
      <div className="input-container">
        <div className="input">
          <input
            type="text"
            placeholder="Search Videos..."
            value={userSearch}
            onChange={(e) => handleChange(e)}
            className="input-search"
            onKeyDown={(e) => handleClickEnter(e)}
          />

          <FaSearch color="aqua" />
        </div>
      </div>
    </div>
  );
};

export default SearchQuery;
