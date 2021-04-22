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
