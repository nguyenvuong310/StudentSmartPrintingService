import { createSlice } from "@reduxjs/toolkit";
const storedUser = JSON.parse(localStorage.getItem("user")) || {};
const initialState = {
  role: null,
  user: storedUser,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setStudent: (state) => {
      return {
        ...state,
        role: "student",
      };
    },
    setAdmin: (state) => {
      return {
        ...state,
        role: "admin",
      };
    },
    logout: (state) => {
      localStorage.removeItem("user");
      return {
        ...state,
        role: null,
      };
    },
    setUser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const { setStudent, setAdmin, logout, setUser } = authSlice.actions;

export default authSlice.reducer;
