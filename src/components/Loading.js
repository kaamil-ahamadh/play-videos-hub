import React from "react";
import { Grid } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loading-container">
      <Grid color="#00ffff" height={80} width={80} />
      <div className="loading-title">Play Videos Hub</div>
    </div>
  );
};

export default Loading;
