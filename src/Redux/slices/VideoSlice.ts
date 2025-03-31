import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoState {
    url : string;
}

const initialState : VideoState = {
    url: "", //initial state is empty
};

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        setVideoUrl: (state, action: PayloadAction<string>) => {
            state.url = action.payload; // Update video URL in Redux store
          },
    },
});

export const { setVideoUrl } = videoSlice.actions;
export default videoSlice.reducer;