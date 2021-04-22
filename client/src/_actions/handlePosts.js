import axios from "axios";

export const getPosts = (userId) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8000/posts/${userId}`);
  dispatch({
    type: "GET_POSTS",
    payload: res,
  });
};

export const post = (token, postCont) => async (dispatch) => {
  const res = await axios.post("http://localhost:8000/posts", postCont, {
    headers: { Authorization: "Bearer " + token },
  });
  dispatch({
    type: "CREATE_POST",
    payload: res,
  });
};

export const likePost = (postId, token) => async (dispatch) => {
  const res = await axios.patch(
    `http://localhost:8000/posts/${postId}/like`,
    null,
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  dispatch({
    type: "LIKE_POST",
    payload: res,
  });
};

export const deletePost = (postId, token) => async (dispatch) => {
  const res = await axios.delete(`http://localhost:8000/posts/${postId}`, {
    headers: { Authorization: "Bearer " + token },
  });
  dispatch({
    type: "DELETE_POST",
    payload: res,
  });
};
