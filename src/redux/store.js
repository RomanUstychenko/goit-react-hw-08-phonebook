import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
// import reducer from "./reducer";
import rootReducer from "./rootReducer";

const store = configureStore(
    rootReducer, )
    

export default store