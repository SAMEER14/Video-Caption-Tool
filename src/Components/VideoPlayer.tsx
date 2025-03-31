//This fetches video URL from redux store and displays the Video on UI

import {useState} from 'react'
import ReactPlayer from "react-player";
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';
import CaptionsOverlay from './CaptionsOverlay';

const VideoPlayer = () => {

  const videoUrl = useSelector((state: RootState) => state.video.url);
  const [currentTime, setCurrentTime] = useState<number>(0);

  if (!videoUrl) 
    return <p className="text-center text-gray-500">No video loaded</p>;

  return (
    <div className="flex justify-center items-center mt-4">
      <ReactPlayer 
      url={videoUrl} 
      controls width="100%" 
      onProgress={({ playedSeconds }) => setCurrentTime(playedSeconds)} 
      className="rounded-lg shadow-lg"
      />
      
      <CaptionsOverlay currentTime={currentTime}/>
    </div>
  )
}

export default VideoPlayer
