import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const VideoPlayCard = ({ id, title, description, channelName }) => {
  return (
    <div className="card-play-video">
      <div className="play-video-container">
        <div>
          {/* <iframe
            width="100%"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube Video Player"
            frameBorder="0"
            className="iframe"
          ></iframe> */}
          <Plyr
            source={{
              type: "video",
              sources: [
                {
                  src: id,
                  provider: "youtube",
                },
              ],
            }}
          />
        </div>
      </div>
      <div className="play-video-details">
        <br />
        <div className="video-text-bold">{title}</div>

        <br />
        <div className="video-text-bold">Uploader: {channelName}</div>
        <br />
        <div className="play-video-description">
          Description: <br />
          {description}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayCard;
