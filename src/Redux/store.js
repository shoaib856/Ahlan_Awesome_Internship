import loginReducer from "./login/loginReducers.js";
import {legacy_createStore as createStore} from "redux";

const store = createStore(loginReducer)
export default store