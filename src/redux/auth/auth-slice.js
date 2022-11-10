import { createSlice } from "@reduxjs/toolkit";
import { signup } from "./auth-operation";


const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
name: "auth",
initialState,
extraReducers: {
    [signup.pending]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [signup.fulfilled]: (store, {payload}) => {
        store.loading = false;
        store.isLogin = true
    },
    [signup.rejected]: (store, {payload}) => {
        store.loading = false;
        store.error = payload
    },
}
});

export default authSlice.reducer