import axios from "axios";

export const uploadPic = (pic, userID, token) => async (dispatch) => {
  const picImg = pic.get("image");
  const res = await axios.post(
    `http://localhost:8000/users/pics/${userID}`,
    picImg,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    }
  );
  dispatch({
    type: "UPLOAD_PIC",
    payload: res,
  });
};

export const getPic = (userID) => async (dispatch) => {
  const res = await axios.post("http://localhost:8000/users/pics", {
    userID,
  });
  dispatch({ type: "GET_PIC", payload: res });
};
