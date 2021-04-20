const getPosts = (initData = { postsData: [] }, action) => {
  switch (action.type) {
    case "GET_POSTS":
      localStorage.setItem("posts", action.payload.data);
      return action.payload.data;
    case "CREATE_POST":
      return {
        postsData: [...initData.result, action.payload.data],
        ...initData,
      };
    case "LIKE_POST":
      return { initData };
    case "DELETE_POST":
      return { initData };
    default:
      return initData;
  }
};

export default getPosts;
