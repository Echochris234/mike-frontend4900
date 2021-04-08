const login = (initData = { userData: "" }, action) => {
  switch (action.type) {
    case "LOGIN":
      let accData = JSON.stringify(action.payload);
      localStorage.setItem("userData", accData);
      return { ...initData, userData: accData };
    default:
      return initData;
  }
};

export default login;
