import axios from "axios";

export const getBookmarks = (userID, token) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8000/bookmarks/${userID}`, {
    headers: { Authorization: "Bearer " + token },
  });

  console.log(res.data.result[0].bookmark);
  dispatch({
    type: "GET_BOOKMARKS",
    payload: res.data.result[0].bookmark,
  });
};

export const addBookmark = (userID, postID, token) => async (dispatch) => {
  const res = await axios.post(
    `http://localhost:8000/bookmarks/${userID}`,
    { postID },
    {
      headers: { Authorization: "Bearer " + token },
    }
  );

  console.log(res);
  dispatch({
    type: "ADD_BOOKMARK",
    payload: res,
  });
};

export const removeBookmark = (userID, postID, token) => async (dispatch) => {
  const res = await axios.patch(
    `http://localhost:8000/bookmarks/${userID}`,
    { postID },
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  dispatch({ type: "DELETE_BOOKMARK", payload: res });
};
