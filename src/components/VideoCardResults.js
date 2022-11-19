import React, { useEffect } from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";

const VideoCardResults = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      className="video-wrapper"
      onClick={() => {
        navigate(`/video/${data.id.videoId}/${data.snippet.title}`);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <div className="card-container">
        <div className="card-video">
          <img
            src={data.snippet.thumbnails.medium.url}
            className="video-thumbnail"
            alt={`${data.snippet.title} video thumbnail`}
          />
          <MdOutlineSlowMotionVideo
            size={50}
            color="#00BFFF"
            className="play-image-icon"
          />

          <div className="video-details">
            <div className="video-title">{data.snippet.title}</div>
            <br />
            <div>Uploader: {data.snippet.channelTitle}</div>
            <div>{format(data.snippet.publishTime)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCardResults;
