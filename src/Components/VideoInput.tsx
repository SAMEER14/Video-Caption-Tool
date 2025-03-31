//This takes link for video url and puts in store

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setVideoUrl } from '../Redux/slices/VideoSlice';

const VideoInput = () => {

    const [url, setUrl] = useState<string>("");
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (!url.trim()) return; // Prevents empty submissions
        dispatch(setVideoUrl(url));
        setUrl("");
    }

  return (
    <div className="flex flex-col items-center p-4 space-y-3 bg-gray-100 shadow-md rounded-lg">
      <input 
        type="text"
        placeholder='Enter Video URL'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button 
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
            Submit to Load Video
            </button>

    </div>
  )
}

export default VideoInput
