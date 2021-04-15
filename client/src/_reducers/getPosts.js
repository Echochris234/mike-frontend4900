const getPosts = (initData = { postsData: null }, action) => {
  switch (action.type) {
    case "GET_POSTS":
      localStorage.setItem("posts", action.payload.data);
      return { postsData: action.payload.data };
    default:
      return initData;
  }
};

export default getPosts;
