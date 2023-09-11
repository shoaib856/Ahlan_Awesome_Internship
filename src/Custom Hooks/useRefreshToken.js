import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateToken } from "../redux-toolkit/auth/authSlice";
const useRefreshToken = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const refresh = async () => {
    const refreshUrl = `https://dummyjson.com/users/${user.id}`;

    const response = await axios.get(refreshUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    const newTokenResponse = await axios.post(
      "https://dummyjson.com/auth/login",
      {
        username: response.data.username,
        password: response.data.password,
      }
    );
    
    dispatch(updateToken(newTokenResponse.data.token));

    return newTokenResponse.data.token;
  };

  return refresh;
};

export default useRefreshToken;
