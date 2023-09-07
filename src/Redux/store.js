import loginReducer from "./login/loginReducers.js";
import {applyMiddleware, legacy_createStore as createStore} from "redux";
import logger from "redux-logger";
import {composeWithDevTools} from "@redux-devtools/extension";

const store = createStore(loginReducer, composeWithDevTools(applyMiddleware(logger)))
export default store