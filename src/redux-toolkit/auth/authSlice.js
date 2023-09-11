// authSlice.js

import { createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
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
      localStorage.setItem("user", JSON.stringify(state.user));
    },

    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.error = null;
      localStorage.removeItem("user");
    },
    updateToken(state, action) {
      state.user.accessToken = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, updateToken } =
  authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await axios.post("auth/login", credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const register = (credentials) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await axios.post("users/add", credentials);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export default authSlice.reducer;
