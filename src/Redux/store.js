import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import productsReducer from "./products/productsSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
});
export default store;
