import * as api from "API/contacts";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


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
        async({ name, phone }, {rejectWithValue}) => {
            console.log(name, phone)
            try {
                const result = await api.addContacts({
                    name,
                    phone,
                  });
                console.log(result)
                return result.data;
                
            } catch (error) {
                console.log("error", error)
                return rejectWithValue(error);
            }},
    );

    // export const addContacts = createAsyncThunk(
        
    //     'contacts/addContact',
    //     async ({ name, phone }, thunkAPI) => {
    //         console.log(name, phone)
    //       try {
    //         const response = await axios.post('/contacts', {
    //           name,
    //           phone,
    //         });
    //         console.log(response.data)
    //         return response.data;
    //       } catch (error) {
    //         console.log("error", error)
    //         return thunkAPI.rejectWithValue(error.message);
    //       }
    //     }
        
    //   );
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