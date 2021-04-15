import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import getPosts from "./getPosts";
import getFollow from "./getFollow";

const combined = combineReducers({
  login,
  signup,
  getPosts,
  getFollow,
});

export default combined;
