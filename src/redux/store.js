import { configureStore } from "@reduxjs/toolkit";


import contactReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-slice";
import authReducer from "./auth/auth-slice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactReducer,
        filter: filterReducer
    }
});