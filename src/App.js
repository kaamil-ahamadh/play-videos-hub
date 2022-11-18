import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import GlobalContext from "./context/GlobalContext";
import { HomeScreen, VideoDetailsScreen, ErrorScreen } from "../src/screens";
import { Header, Footer, Loading } from "../src/components";

function App() {
  /* States */

  //Loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app-container">
      <Header />
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
