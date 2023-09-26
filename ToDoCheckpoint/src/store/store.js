import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice.js";

const store = configureStore({ reducer: todoSlice });

export default store;
