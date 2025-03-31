import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Caption} from "../../types";

interface CaptionsState {
    captions: Caption[]; //holds captions
}

const initialState: CaptionsState ={
    captions: [], //empty initally as no caption
}

const captionsSlice = createSlice({
    name: 'captions',
    initialState,
    reducers:{
        addCaption: (state, action: PayloadAction<Caption>) => {
            state.captions.push(action.payload); //new caption added
        },
        removeCaption: (state, action: PayloadAction<number>) => {
            state.captions = state.captions.filter(
                (caption) => caption.timestamp !== action.payload
            );
        },
    },
});

export const {addCaption, removeCaption} = captionsSlice.actions;
export default captionsSlice.reducer;