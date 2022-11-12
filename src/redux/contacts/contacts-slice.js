import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContact } from "./contacts-operation";

const initialState = {
    items: [],
    loading: false,
    error:null,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.loading = true;
        },
        [fetchContacts.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.items = payload;
        },
        [fetchContacts.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [addContacts.pending]: (state) => {
            state.loading = true;
        },
        [addContacts.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.error = null;
            state.items.push(payload)
        },
        [addContacts.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [deleteContact.pending]: (state) => {
            state.loading = true;
        },
        [deleteContact.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.items = state.items.filter(item => item.id !== payload);
        },
        [deleteContact.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
    }
});

export const contactsReducer = contactsSlice.reducer;