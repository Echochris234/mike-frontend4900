const bookmarks = (initData = { bookmarks: [] }, action) => {
  switch (action.type) {
    case "GET_BOOKMARKS":
      console.log(action.payload);
      localStorage.setItem("bookmarks", action.payload);
      return { bookmarks: action.payload };
    case "ADD_BOOKMARK":
      console.log(action.payload.data);
      return initData;
    case "DELETE_BOOKMARK":
      console.log(action.payload.data);
      return initData;
    default:
      return initData;
  }
};

export default bookmarks;
