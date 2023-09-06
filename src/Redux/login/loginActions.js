import {LOGIN} from "./loginType.js";

export const login = () => {
    return {
        type: LOGIN,
        payload: {
            email: "",
            password: ""

        }
    }
}