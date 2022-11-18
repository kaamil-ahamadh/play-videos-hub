import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { youtubeApiVideoDetails } from "../apis/youtubeApi";
import { VideoPlayCard } from "../components";

const VideoDetailsScreen = () => {
  const { id, title } = useParams();

  const [video, setVideo] = useState({});

  useEffect(() => {
    handleVideoDetailsApi();
  }, []);

  const handleVideoDetailsApi = async () => {
    try {
      const response = await youtubeApiVideoDetails(id);
      setVideo(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {video?.length > 0 ? (
        <>
          <VideoPlayCard
            id={id}
            title={video[0].snippet.title}
            description={video[0].snippet.description}
            channelName={video[0].snippet.channelTitle}
          />
        </>
      ) : (
        <div>Video Loading...</div>
      )}
    </>
  );
};

export default VideoDetailsScreen;
