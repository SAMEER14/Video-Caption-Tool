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
    <div>
      <input 
        type="text"
        placeholder='Enter Video URL'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className='border-2 text-green-500'
        />

        <button 
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Submit to Load Video
            </button>

    </div>
  )
}

export default VideoInput
