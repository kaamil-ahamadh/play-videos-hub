import React from "react";

const VideoPlayCard = ({ id, title, description, channelName }) => {
  return (
    <div className="card-play-video">
      <div className="play-video-container">
        <div>
          <iframe
            width="100%"
            // height="280px"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube Video Player"
            frameBorder="0"
            className="iframe"
          ></iframe>
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
