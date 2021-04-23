const bookmarks = (initData = { bookmarks: [] }, action) => {
  switch (action.type) {
    case "GET_BOOKMARKS":
      localStorage.setItem("bookmarks", action.payload);
      return { bookmarks: action.payload };
    case "ADD_BOOKMARK":
      localStorage.setItem("bookmarks", action.payload);
      return { bookmarks: action.payload };
    case "DELETE_BOOKMARK":
      const mapNewBookmarks = [];
      for (let i = 0; i < initData.bookmarks.length; i++) {
        if (initData.bookmarks[i]._id !== action.payload.data._id) {
          mapNewBookmarks.push(initData.bookmarks[i]);
        }
      }
      return { bookmarks: mapNewBookmarks };
    default:
      return initData;
  }
};

export default bookmarks;
