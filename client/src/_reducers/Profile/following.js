const following = (initData = { following: null }, action) => {
  switch (action.type) {
    case "FOLLOWING_STATUS":
      return { following: action.payload.data };
    case "FOLLOW_USER":
      return { following: true };
    case "UNFOLLOW_USER":
      return { following: false };
    default:
      return initData;
  }
};

export default following;
