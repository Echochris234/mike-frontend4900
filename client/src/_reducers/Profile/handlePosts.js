const getPosts = (initData = { postsData: [] }, action) => {
  switch (action.type) {
    case "GET_POSTS":
      localStorage.setItem("posts", JSON.stringify(action.payload.data));
      return action.payload.data;
    case "CREATE_POST":
      const newPostList = [];
      newPostList.push(action.payload.data);
      for (let i = 0; i < action.payload.data.length; i++) {
        newPostList.push(action.payload.data[i]);
      }
      localStorage.setItem("posts", newPostList);
      return { postsData: newPostList };
    case "LIKE_POST":
      const mapNewLikes = [];
      for (let i = 0; i < initData.result.length; i++) {
        if (action.payload.data.result[0]._id !== initData.result[i]._id) {
          mapNewLikes.push(initData.result[i]);
        } else {
          mapNewLikes.push(action.payload.data.result[0]);
        }
      }
      localStorage.setItem("posts", mapNewLikes);
      return { postsData: mapNewLikes };
    case "DELETE_POST":
      const mapNewPosts = [];
      for (let i = 0; i < initData.result.length; i++) {
        if (initData.result[i]._id !== action.payload) {
          mapNewPosts.push(initData.result[i]);
        }
      }
      localStorage.setItem("posts", mapNewPosts);
      return { postsData: mapNewPosts };
    default:
      return initData;
  }
};

export default getPosts;
