
# Video-Caption-Tool

Header Component
Video Input Component - to insert video link and store it in redux store
Video Player Component - the inserted video will display on UI
Caption Input component - to input caption with time stamp
caption Overlay component - to display caption at correct time with video playing
Store and slices to handle state management

--------------------------------------

Overview

This project is a React-based Video Captioning App that allows users to:
Play a video and display captions at specific timestamps.
Manually enter timestamps and captions.
Use arrow keys to fine-tune timestamps for accurate placement.
Dynamically update captions based on video progress.

website to run application - 
https://entervideocaption.netlify.app/

If user want to run locally 
Clone the repo and do 
npm i or yarm install

npm run dev
--------------------------------------
How to Use
-> Load the website - 
Paste the URL (you can use sample video url - " https://vimeo.com/1071001172/11e4092148 ")
-> Playing the Video to check it 
Play the video to see existing captions at their timestamps.
-> Adding Captions
Enter a timestamp manually.
-> Type the caption text
Press Add to save it.
->Adjusting Timestamps
Press (Up Arrow) to increase timestamp by 0.1s.
Press (Down Arrow) to decrease timestamp by 0.1s.

-> Finally play the video from starting and Enjoy Video with captions

--------------------------------------

=> Technologies Used
- React (Frontend framework)
- TypeScript (Type safety)
- Redux Toolkit (State management)
- Tailwind CSS (Styling)
