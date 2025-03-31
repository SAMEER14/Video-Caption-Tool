import {configureStore} from "@reduxjs/toolkit";
import videoReducer from './slices/VideoSlice';
import captionsReducer from "./slices/CaptionSlice";
export const store = configureStore({
    reducer : {
        video: videoReducer,
        captions: captionsReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;