const login = (initData = { userData: null }, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("userInfo", action.payload.data.result._id);
      const accData = JSON.stringify(action.payload.data);
      return { ...initData, userData: accData };
    case "LOGOUT":
      localStorage.clear();
      return { userData: null };
    default:
      return initData;
  }
};

export default login;
