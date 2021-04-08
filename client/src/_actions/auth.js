import axios from "axios";

export const login = (user) => async (dispatch) => {
  const res = await axios.post("http://localhost:8000/auth/login", user);
  dispatch({
    type: "LOGIN",
    payload: res,
  });
};

export const signup = (user) => async (dispatch) => {
  const res = await axios.post("http://localhost:8000/users", user);
  dispatch({
    type: "SIGNUP",
    payload: res,
  });
};
