const profilePic = (initData = { prof: "" }, action) => {
  switch (action.type) {
    case "GET_PIC":
      return { prof: action.payload };
    case "UPLOAD_PIC":
      console.log(action.payload.data);
      return { prof: action.payload.data };
    default:
      return initData;
  }
};

export default profilePic;
