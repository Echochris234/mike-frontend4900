const getFollow = (initData = { Followers: "0", Following: "0" }, action) => {
  switch (action.type) {
    case "GET_FOLLOWER":
      console.log(action.payload.data.followerCount);
      localStorage.setItem("followers", action.payload.data.followerCount);
      return { ...initData, Followers: action.payload.data.followerCount };
    case "GET_FOLLOWING":
      console.log(action.payload.data.followingCount);
      localStorage.setItem("following", action.payload.data.followingCount);
      return { ...initData, Following: action.payload.data.followingCount };
    default:
      return initData;
  }
};

export default getFollow;
