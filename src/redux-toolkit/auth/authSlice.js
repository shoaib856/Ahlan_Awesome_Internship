// authSlice.js

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: JSON.parse(localStorage.getItem("userData")) || null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },

    loginSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },

    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.error = null;
      localStorage.removeItem("userData");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await axios.post(
      "https://dummyjson.com/auth/login",
      credentials
    );
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const register = (credentials) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await axios.post(
      "https://dummyjson.com/users/add",
      credentials
    );
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export default authSlice.reducer;
