import axios from "axios";

export const getFollow = (userId) => async (dispatch) => {
  const res = await axios.post(
    "http://localhost:8000/follow/followingcount",
    {},
    { headers: { Authorization: "Bearer " + userId } }
  );
  const data = await axios.post(
    `http://localhost:8000/follow/followercount`,
    {},
    { headers: { Authorization: "Bearer " + userId } }
  );
  dispatch({
    type: "GET_FOLLOW",
    payload: { res, data },
  });
};
