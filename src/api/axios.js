import axios from "axios";

const instance = axios.create({
    baseURL: "https://api-v2.dev.ahlan.digital/api/v1/profile-service/",
    headers: {
        "Content-type": "application/json",
    },
});

// const refresh = async () => {
//
//     const response = await instance.get("profiles/default", {
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${auth.access_token}`,
//         },
//     });
//     const newTokenResponse = await instance.post(
//         "auth/login",
//         {
//             email: response.data.email,
//             password: response.data.password,
//         }
//     );
//     store.dispatch(updateToken(newTokenResponse.data.access_token))
//     return newTokenResponse.data.access_token;
// };
//

instance.interceptors.request.use(
    async (config) => {
        const auth = JSON.parse(localStorage.getItem("auth"))

        if (auth) {
            config.headers["Authorization"] = `Bearer ${auth.access_token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const auth = JSON.parse(localStorage.getItem("auth"))
        const originalRequest = error.config;
        if (error.response.status == 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // const newToken = await refresh();
                originalRequest.headers["Authorization"] = `Bearer ${auth.access_token}`;
                return instance(originalRequest);
            } catch (e) {
                return Promise.reject(e);
            }
        }
        return Promise.reject(error);
    }
);


export default instance;

