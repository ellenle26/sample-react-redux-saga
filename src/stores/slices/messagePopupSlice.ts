import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";


interface MessagePopupState {
    message: string | null;
    open: boolean;
}

const initialState: MessagePopupState = {
    message: null,
    open: false
}

const messagePopupAdapter = createEntityAdapter<MessagePopupState>();

export const messagePopupSlice = createSlice({
    name: "messagePopup",
    initialState: messagePopupAdapter.getInitialState(initialState),
    reducers: {
        openPopup: (state, action: PayloadAction<string>) => {
            return {... state, open: true, message: action.payload};
        },
        closePopup: (state) => {
            return {... state, open: false, message: null};
        },
    }
});

export const {openPopup, closePopup} = messagePopupSlice.actions;


export default messagePopupSlice.reducer;

