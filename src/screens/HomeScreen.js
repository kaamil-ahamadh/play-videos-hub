import React, { useContext } from "react";

import { VideoCard } from "../components";
import GlobalContext from "../context/GlobalContext";

const HomeScreen = () => {
  const { trendingVideos } = useContext(GlobalContext);
  return (
    <div>
      <div className="trending-title">Trending Videos</div>
      {trendingVideos?.length > 0 ? (
        trendingVideos.map((video, index) => {
          return <VideoCard data={video} key={index} />;
        })
      ) : (
        <div>Videos Not Found</div>
      )}
    </div>
  );
};

export default HomeScreen;
