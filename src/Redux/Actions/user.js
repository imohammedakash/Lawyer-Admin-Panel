import axios from "axios";
import { persistor } from "../store";
const API_URL = "https://shlok-mittal-lawyer-backend.vercel.app";
export const LoginUser = (credentials) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });
    const data = await axios.post('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/login', {
      email: credentials.email,
      password: credentials.password
    })
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data.data,
    });
    return data.data;
  } catch (err) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: err.message,
    });
    return err?.response?.data ? err?.response?.data : err.message;
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST",
    });
    persistor.purge();
    dispatch({
      type: "LOGOUT_SUCCESS"
    });
  } catch (err) {
    dispatch({ type: "LOGOUT_FAILURE" });
    return err;
  }
};




