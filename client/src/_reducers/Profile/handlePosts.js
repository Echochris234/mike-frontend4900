const getPosts = (initData = { postsData: [] }, action) => {
  switch (action.type) {
    case "GET_POSTS":
      console.log(action.payload.data.result);
      return { postsData: action.payload.data.result };
    case "CREATE_POST":
      const newPostList = [];
      console.log(action.payload.data);
      newPostList.push(action.payload.data);
      for (let i = 0; i < initData.postsData.length; i++) {
        newPostList.push(initData.postsData[i]);
      }
      return { postsData: newPostList };
    case "LIKE_POST":
      const mapNewLikes = [];
      for (let i = 0; i < initData.postsData.length; i++) {
        if (action.payload.data.result[0]._id !== initData.postsData[i]._id) {
          mapNewLikes.push(initData.postsData[i]);
        } else {
          mapNewLikes.push(action.payload.data.result[0]);
        }
      }
      return { postsData: mapNewLikes };
    case "DELETE_POST":
      const mapNewPosts = [];
      for (let i = 0; i < initData.postsData.length; i++) {
        if (initData.postsData[i]._id !== action.payload) {
          mapNewPosts.push(initData.postsData[i]);
        }
      }
      return { postsData: mapNewPosts };
    default:
      return initData;
  }
};

export default getPosts;
