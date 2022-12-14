import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="video-wrapper"
      onClick={() => {
        navigate(`/video/${data.video.videoId}/${data.video.title}`);
      }}
    >
      <div className="card-container">
        <div className="card-video">
          <img
            src={data.video.thumbnails[2].url}
            className="video-thumbnail"
            alt={`${data.video.title} video thumbnail`}
          />
          <MdOutlineSlowMotionVideo
            size={50}
            color="#00BFFF"
            className="play-image-icon"
          />

          <div className="video-details">
            <div className="video-title">{data.video.title}</div>
            <br />
            <div>Uploader: {data.video.channelName}</div>
            <div>
              {data.video.viewCountText} {data.video.publishedTimeText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
