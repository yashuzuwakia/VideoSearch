import React, { Component } from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((a) => {
    return (
      <VideoItem key={a.id.videoId} onVideoSelect={onVideoSelect} video={a} />
    );
  });

  return (
    <div>
      <div className="ui list">{renderedList}</div>
    </div>
  );
};

export default VideoList;
