import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import GlobalContext from "./context/GlobalContext";
import {
  HomeScreen,
  VideoDetailsScreen,
  ErrorScreen,
  SearchResultsScreen,
} from "../src/screens";
import { Header, Footer, Loading, SearchQuery } from "../src/components";
import { youtubeApiSearch, youtubeApiTrending } from "./apis/youtubeApi";

function App() {
  //Navigate
  const navigate = useNavigate();
  /* States */

  //Loading
  const [loading, setLoading] = useState(true);

  //Search
  const [userSearch, setUserSearch] = useState("");

  // Global States
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  //UseEffect
  useEffect(() => {
    handleTrendingApi();
  }, []);

  //APIs
  const handleTrendingApi = async () => {
    try {
      const response = await youtubeApiTrending();
      setTrendingVideos(response.data.contents);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchApi = async (userSearch) => {
    try {
      setLoading(true);
      const response = await youtubeApiSearch(userSearch);
      setSearchResults(response.data.items);
      setUserSearch("");

      //Navigate
      navigate(`/search/${userSearch}`);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app-container">
      <div>
        <Header />
        <SearchQuery
          userSearch={userSearch}
          setUserSearch={setUserSearch}
          handleSearchApi={handleSearchApi}
        />
      </div>
      <div className="screen-container">
        <GlobalContext.Provider
          value={{
            trendingVideos,
            setTrendingVideos,
            searchResults,
            setLoading,
          }}
        >
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/video/:id/:title" element={<VideoDetailsScreen />} />
            <Route
              path="/search/:searchQuery"
              element={<SearchResultsScreen />}
            />
            <Route path="*" element={<ErrorScreen />} />
          </Routes>
        </GlobalContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
