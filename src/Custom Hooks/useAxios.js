import { useSelector } from "react-redux";
import useRefreshToken from "./useRefreshToken";
import { useEffect } from "react";
import axiosPrivate from "../api/axios";

const useAxios = () => {
  const refresh = useRefreshToken();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      async (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${user.token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const token = await refresh();
          axiosPrivate.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${token}`;
          return axiosPrivate(originalRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseInterceptor);
      axiosPrivate.interceptors.request.eject(requestInterceptor);
    };
  }, [user, refresh]);
  return axiosPrivate;
};

export default useAxios;
