import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import counterReducer from "../src/slices/counterSlice";
const store = configureStore({
  reducer: { auth: authReducer, counter: counterReducer },
});

export default store;
