import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AuthState {
    isAuthorized: boolean;
}

const initialState: AuthState = {
    isAuthorized: false
}

const authAdapter = createEntityAdapter<AuthState>();

export const authSlice = createSlice({
    name: "auth",
    initialState: authAdapter.getInitialState(initialState),
    reducers: {
        requestAuthorization: (state) => {
            return { ...state };
        },
        authorizedSuccess: (state) => {
            return { ...state, isAuthorized: true };
        },
        authorizedFailure: (state) => {
            return { ...state, isAuthorized: false };
        },
    }
});

export const { requestAuthorization, authorizedSuccess, authorizedFailure } = authSlice.actions;


export default authSlice.reducer;

