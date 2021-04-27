import axios from "axios";

export const getBookmarks = (userID, token) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:8000/posts/bookmarks/${userID}`,
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  dispatch({
    type: "GET_BOOKMARKS",
    payload: res.data.bookmarkedPosts,
  });
};

export const addBookmark = (userID, postID, token) => async () => {
  await axios.post(
    `http://localhost:8000/bookmarks/${userID}`,
    { postID },
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
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
