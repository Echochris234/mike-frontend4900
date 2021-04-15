const login = (initData = { userData: null }, action) => {
  switch (action.type) {
    case "LOGIN":
      const accData = JSON.stringify(action.payload.data);
      return { ...initData, userData: accData };
    case "LOGOUT":
      return { userData: null };
    default:
      return initData;
  }
};

export default login;
