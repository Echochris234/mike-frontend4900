import axios from "axios";

export const uploadPic = (pic, userID, token) => async (dispatch) => {
  const res = await axios.post(
    `http://localhost:8000/users/pics/${userID}`,
    pic,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  console.log(res);
  dispatch({
    type: "UPLOAD_PIC",
    payload: res,
  });
};

export const getPic = (userID) => async (dispatch) => {
  const res = await axios.post("http://localhost:8000/users/pics", {
    userID,
  });
  console.log(res);
  dispatch({ type: "GET_PIC", payload: res });
};
