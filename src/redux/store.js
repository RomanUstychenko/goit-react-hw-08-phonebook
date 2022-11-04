import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
    key: "root",
    storage,
};  


const persistedContactsReducer = persistReducer(contactsPersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedContactsReducer,
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});  
export const persistor = persistStore(store)
export default store