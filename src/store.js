
import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./todoReducer";

export const store = configureStore({
    reducer:{
        todo:toDoReducer
    }
});