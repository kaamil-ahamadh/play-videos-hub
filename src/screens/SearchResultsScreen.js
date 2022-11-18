import React, { useContext } from "react";

import GlobalContext from "../context/GlobalContext";
import { VideoCardResults } from "../components";

const SearchResultsScreen = () => {
  const { searchResults } = useContext(GlobalContext);
  return (
    <div>
      <div className="trending-title">Search Results</div>
      {searchResults?.length > 0 ? (
        searchResults.map((video, index) => {
          return <VideoCardResults data={video} key={index} />;
        })
      ) : (
        <div>Videos not found</div>
      )}
    </div>
  );
};

export default SearchResultsScreen;
