import { combineReducers } from "redux";
import login from "./User/login";
import signup from "./User/signup";
import getPosts from "./Profile/handlePosts";
import getFollow from "./Profile/getFollow";
import bookmarks from "./Bookmarks/bookmarks";
import profilePic from "./Profile/profilePic.js";
import following from "./Profile/following.js";

const combined = combineReducers({
  login,
  signup,
  getPosts,
  getFollow,
  bookmarks,
  profilePic,
  following,
});

export default combined;
