// authSlice.js

import { createSlice } from "@reduxjs/toolkit";
import instance from "../../api/axios";

const initialState = {
  auth: JSON.parse(localStorage.getItem("auth")) || null,
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
      state.auth = action.payload;
      localStorage.setItem("auth", JSON.stringify(state.auth));
    },

    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.auth = null;
      state.error = null;
      localStorage.removeItem("auth");
    },
    updateToken(state, action) {
      state.auth["access_token"] = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, updateToken } =
  authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await instance.post("auth/login", credentials, {
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
    const response = await instance.post("auth/sign-up", credentials);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export default authSlice.reducer;
