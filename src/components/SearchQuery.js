import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchQuery = ({ userSearch, setUserSearch, handleSearchApi }) => {
  const handleChange = (event) => {
    setUserSearch(event.target.value);
  };

  const handleClickEnter = (event) => {
    if (event.key === "Enter") {
      handleSearchApi(userSearch);
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

          <FaSearch
            color="aqua"
            onClick={() => {
              handleSearchApi(userSearch);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchQuery;
