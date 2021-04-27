const profilePic = (initData = { prof: "" }, action) => {
  switch (action.type) {
    case "GET_PIC":
      return { prof: action.payload };
    default:
      return initData;
  }
};

export default profilePic;
