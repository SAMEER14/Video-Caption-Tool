//This fetches video URL from redux store and displays the Video on UI

import React from 'react'
import ReactPlayer from "react-player";
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';

const VideoPlayer = () => {

  const videoUrl = useSelector((state: RootState) => state.video.url);

  if (!videoUrl) return <p>No video loaded</p>;

  return (
    <div>
      <ReactPlayer url={videoUrl} controls width="100%" />
    </div>
  )
}

export default VideoPlayer
