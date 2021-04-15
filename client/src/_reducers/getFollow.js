const getFollow = (initData = { Followers: 0, Following: 0 }, action) => {
  switch (action.type) {
    case "GET_FOLLOW":
      localStorage.setItem("followers", action.payload.data.data.followerCount);
      localStorage.setItem("following", action.payload.res.data.followingCount);
      return { ...initData };
    default:
      return initData;
  }
};

export default getFollow;
