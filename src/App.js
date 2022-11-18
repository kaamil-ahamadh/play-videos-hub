import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import GlobalContext from "./context/GlobalContext";
import { HomeScreen, VideoDetailsScreen, ErrorScreen } from "../src/screens";
import { Header, Footer, Loading, SearchQuery } from "../src/components";
import { youtubeApiTrending } from "./apis/youtubeApi";

function App() {
  /* States */

  //Loading
  const [loading, setLoading] = useState(true);

  //Search
  const [userSearch, setUserSearch] = useState("");

  // Global States

  //UseEffect
  useEffect(() => {
    handleTrendingApi();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleTrendingApi = async () => {
    try {
      const response = await youtubeApiTrending();
      console.log(response.data.contents);
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
        <SearchQuery userSearch={userSearch} setUserSearch={setUserSearch} />
      </div>
      <div className="screen-container">
        <GlobalContext.Provider value={{}}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/video/:title" element={<VideoDetailsScreen />} />
            <Route path="*" element={<ErrorScreen />} />
          </Routes>
        </GlobalContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
