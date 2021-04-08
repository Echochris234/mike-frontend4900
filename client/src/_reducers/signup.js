const signup = (initData = { signupStatus: "" }, action) => {
  switch (action.type) {
    case "SIGNUP":
      let signupRes = JSON.stringify(action.payload);
      return { ...initData, signupStatus: signupRes };
    default:
      return initData;
  }
};

export default signup;
