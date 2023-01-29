import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./slices/studentSlice";

export const store = configureStore({
    reducer:{
        studentReducer: StudentReducer
    }
})