import {LOGIN} from "./loginType.js";

export const login = (email = "", password = "") => {
    return {
        type: LOGIN,
        payload: {
            email,
            password
        }
    }
}