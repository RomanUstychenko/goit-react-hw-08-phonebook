import * as api from "API/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(_, thunkApi) => {
        try {
            const data = await api.getContacts();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }}
    );

    export const addContacts = createAsyncThunk(
        "contacts/add",
        async(data, {rejectWithValue}) => {
            try {
                const result = await api.addContacts(data);
                return result;
            } catch (error) {
                return rejectWithValue(error);
            }},
    );

    export const deleteContact = createAsyncThunk(
        "contacts/remove",
        async(id, {rejectWithValue}) => {
            try {
                await api.deleteContact(id);
                return id;
            } catch(error) {
                return rejectWithValue(error);
            }}
    );