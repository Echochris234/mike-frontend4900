import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { logout } from "../../_actions/auth.js";
import Login from "../User/Login";
import Posts from "../Profile/Posts";
import Profile from "../Profile/Profile";
import { getPosts } from "../../_actions/handlePosts.js";
import CreatePost from "./CreatePost";

export default function Landing() {
  const [user, setUser] = useState(localStorage.getItem("userInfo"));
  useEffect(() => {
    setUser(localStorage.getItem("userInfo"));
  }, []);
  const history = useHistory();
  const dispatch = useDispatch();
  if (user) {
    return (
      <div>
        <Container>
          <Segment basic padded="very">
            <h3>{JSON.parse(user).result.name}</h3>
            <Button primary basic>
              <Link
                to={{
                  pathname: `/profile/${JSON.parse(user).result.name}`,
                  state: {
                    id: JSON.parse(user).result._id,
                    token: JSON.parse(user).token,
                  },
                }}
              >
                My Profile
              </Link>
            </Button>
            <Button
              primary
              basic
              onClick={(e) => {
                dispatch(logout(JSON.parse(user).token));
                history.push("/");
              }}
            >
              Logout
            </Button>
            <Button primary basic>
              <Link
                to={{
                  pathname: "/bookmarks",
                  state: {
                    id: JSON.parse(user).result._id,
                    token: JSON.parse(user).token,
                  },
                }}
              >
                Bookmarks
              </Link>
            </Button>
          </Segment>
        </Container>
        <Posts id={JSON.parse(user).result._id} location="landing" />
        <CreatePost
          id={JSON.parse(user).result._id}
          token={JSON.parse(user).token}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Segment basic padded="very">
          <h3>Welcome to TweTwe!</h3>
        </Segment>
        <Button primary basic>
          <Link to="login">Login</Link>
        </Button>
        <Button primary basic>
          <Link to="/signup">Signup</Link>
        </Button>
        <Login />
      </div>
    );
  }
}
/*
<Profile
          id={JSON.parse(user).result._id}
          token={JSON.parse(user).token}
        />
*/
