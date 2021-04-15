import axios from "axios";

export const getPosts = (userId) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8000/posts/${userId}`);
  dispatch({
    type: "GET_POSTS",
    payload: res,
  });
};

/*export const post = (userId) => async (dispatch) => {
  const res = await axios.post("http://localhost:8000/posts/auth", userId);
  dispatch({
    type: "CREATE_POST",
    payload: res,
  });
};*/
