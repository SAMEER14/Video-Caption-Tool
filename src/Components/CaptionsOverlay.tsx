//Component to display captions at correct timestamp 


import React, { useState,useEffect } from 'react'
import { RootState } from '../Redux/Store';
import { useSelector } from 'react-redux';

interface CaptionOverlayProps {
    currentTime: number;
}
 
  const CaptionsOverlay: React.FC<CaptionOverlayProps> = ({ currentTime }) => {
    // Select captions from Redux store
    const captions = useSelector((state: RootState) => state.captions.captions);
    
    // State to store the caption currently being displayed
    const [displayCaption, setDisplayCaption] = useState<string>("");
  
    /*
    useEffect(() => {
        if(captions.length === 0) return;
      // Find the caption that matches the current timestamp
    //   const activeCaption = captions.find(
    //     (caption) => caption.timestamp <= currentTime
    //   );
    const activeCaption = [...captions] // Clone array
    .reverse() // Reverse to get the latest match first
    .find((caption) => caption.timestamp <= currentTime);
  
      // Update displayed caption
      setDisplayCaption(activeCaption?.text || "");
    }, [currentTime, captions]);
    */
    

    useEffect(() => {
        if (captions.length === 0) {
            setDisplayCaption(""); // Ensure captions reset when none exist
            return;
        }

        // Find the latest matching caption before or at the current time
        const activeCaption = [...captions]
            .reverse()
            .find((caption) => Math.floor(caption.timestamp) === Math.floor(currentTime));

        if (activeCaption) {
            const words = activeCaption.text.split(" ");
            setDisplayCaption(words.slice(0, 3).join(" ")); // Limit caption to 3 words
        } else {
            setDisplayCaption(""); // Hide caption if no match
        }
    }, [currentTime, captions]);
  
    // return (
    // //   <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-md text-lg">
    // //     {displayCaption && <p>{displayCaption}</p>}
    // //   </div>
    // // <></>
    
    // )
    return displayCaption ? ( // Only render if there is a caption
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-md text-lg">
          <p>{displayCaption}</p>
        </div>
      ) : null; // Return `null` when there is no caption
  };
  

export default CaptionsOverlay
