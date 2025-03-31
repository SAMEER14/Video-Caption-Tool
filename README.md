<<<<<<< HEAD
# Video-Caption-Tool
Adding Caption To Videos
=======
Start  
│  
├── User enters a video URL  
│   ├── Validate URL format (Google Drive, Vimeo, etc.)  
│   ├── Fetch video metadata (if needed)  
│  
├── User enters captions in a text box  
│   ├── Text input for captions  
│   ├── Timestamp input for when captions appear  
│  
├── User submits the captions  
│   ├── Store captions and timestamps in Redux  
│   ├── Validate input (timestamps in increasing order)  
│  
├── Video player displays video with captions  
│   ├── Load video in a player  
│   ├── Sync captions to timestamps  
│   ├── Allow pause/play controls  
│  
└── End  

Header Component
Video Input Component - to insert video link and store it in redux store
Video Player Component - the inserted video will display on UI