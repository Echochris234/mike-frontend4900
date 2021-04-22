import { combineReducers } from "redux";
import login from "./User/login";
import signup from "./User/signup";
import getPosts from "./Profile/handlePosts";
import getFollow from "./Profile/getFollow";
import bookmarks from "./Bookmarks/bookmarks";

const combined = combineReducers({
  login,
  signup,
  getPosts,
  getFollow,
  bookmarks,
});

export default combined;
