import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { createStore } from "redux";
// import reducer from "./reducer";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-slice";

const contactsPersistConfig = {
    key: "root",
    storage,
};  
const reducer = combineReducers({
        contacts: contactsReducer,
        filter: filterReducer
    }
)
console.log(reducer)
console.log(rootReducer)

const persistedContactsReducer = persistReducer(contactsPersistConfig, reducer)

export const store = configureStore({
    reducer: persistedContactsReducer
});  
export const persistor = persistStore(store)
export default store