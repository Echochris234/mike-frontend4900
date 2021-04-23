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
      const mapNewLikes = initData.result.map((post) => {
        if (action.payload.data.result[0]._id === post._id) {
          return { ...post, ...action.payload.data.result[0]._id };
        } else {
          return post;
        }
      });
      return { ...initData, mapNewLikes };
    case "DELETE_POST":
      const mapNewPosts = [];
      for (let i = 0; i < initData.result.length; i++) {
        if (initData.result[i]._id !== action.payload) {
          mapNewPosts.push(initData.result[i]);
        }
      }
      return { postsData: mapNewPosts };
    default:
      return initData;
  }
};

export default getPosts;
