import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCaption } from '../Redux/slices/CaptionSlice';
import { Caption } from '../types';

const CaptionsInput = () => {

  const [caption, setCaption] = useState<string>(""); // Holds caption text
  const [timestamp, setTimestamp] = useState<number>(0); // Holds timestamp value 
  const dispatch = useDispatch();
  //Function to handle adding caption to video
  const handleAddCaption = () => {
    // if(!caption.trim() || timestamp <0) return; //validating the input

    const newCaption: Caption = {text: caption, timestamp};
    dispatch(addCaption(newCaption)); //make slice
    setCaption(""); //reset
    setTimestamp(0) //reset
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 shadow-md rounded-lg space-y-3">
      <input 
        type="number" step="0.1"
        placeholder='Timestamp (seconds)'
        value={timestamp}
        onChange={(e)=> setTimestamp(Number(e.target.value))}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

       <input 
        type="text"
        placeholder='Enter Caption'
        value={caption}
        onChange={(e)=> setCaption(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />

       <button onClick={handleAddCaption} 
       className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
        Add Captions</button>

    </div>
  )
}

export default CaptionsInput
