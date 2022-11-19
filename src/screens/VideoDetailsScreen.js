import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { youtubeApiRelated, youtubeApiVideoDetails } from "../apis/youtubeApi";
import { VideoCardResults, VideoPlayCard } from "../components";

const VideoDetailsScreen = () => {
  const { id, title } = useParams();

  const [video, setVideo] = useState({});
  const [relatedVideos, setRelatedVideos] = useState({});

  useEffect(() => {
    handleVideoDetailsApi();
  }, [id]);

  const handleVideoDetailsApi = async () => {
    try {
      const response = await youtubeApiVideoDetails(id);
      setVideo(response.data.items);

      const responseRelatedVideos = await youtubeApiRelated(id);
      setRelatedVideos(responseRelatedVideos.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {video?.length > 0 && relatedVideos?.length > 0 ? (
        <>
          <VideoPlayCard
            id={id}
            title={video[0].snippet.title}
            description={video[0].snippet.description}
            channelName={video[0].snippet.channelTitle}
          />
          <div>
            <br />
            <br />
            <br />
            <div className="video-text-bold">Related Videos</div>
            <br />
            {relatedVideos.map((video, index) => {
              return <VideoCardResults data={video} key={index} />;
            })}
          </div>
        </>
      ) : (
        <div>Video Loading...</div>
      )}
    </>
  );
};

export default VideoDetailsScreen;
