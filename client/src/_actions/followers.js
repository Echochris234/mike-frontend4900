import axios from "axios";

export const getFollowing = (follower) => async (dispatch) => {
  const res = await axios.post("http://localhost:8000/follow/followingcount", {
    follower,
  });
  dispatch({
    type: "GET_FOLLOWING",
    payload: res,
  });
};

export const getFollower = (following) => async (dispatch) => {
  const res = await axios.post("http://localhost:8000/follow/followercount", {
    following,
  });
  dispatch({
    type: "GET_FOLLOWER",
    payload: res,
  });
};

export const checkFollowing = (userID, profileID, token) => async (
  dispatch
) => {
  const res = await axios.post(
    "http://localhost:8000/follow/following",
    { userID, profileID },
    { headers: { Authorization: "Bearer " + token } }
  );
  console.log(res);
  dispatch({ type: "FOLLOWING_STATUS", payload: res });
};

export const followUser = (userID, profileID, token) => async (dispatch) => {
  const res = await axios.post(
    "http://localhost:8000/follow",
    { userID, profileID },
    { headers: { Authorization: "Bearer " + token } }
  );
  dispatch({ type: "FOLLOW_USER", payload: res });
};

export const unfollowUser = (userID, profileID, token) => async (dispatch) => {
  const res = await axios.post(
    "http://localhost:8000/follow/unfollow",
    { userID, profileID },
    { headers: { Authorization: "Bearer " + token } }
  );
  dispatch({ type: "UNFOLLOW_USER", payload: res });
};
