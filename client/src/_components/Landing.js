import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { logout } from "../_actions/auth.js";
import Login from "./Login";

export default function Landing() {
  var user = useSelector((state) => state.login.userData);
  if (!user && localStorage.getItem("userData")) {
    user = localStorage.getItem("userData");
  }
  const history = useHistory();
  const dispatch = useDispatch();
  if (user) {
    return (
      <div>
        <Container>
          <Segment basic padded="very">
            <h3>Welcome back to TweTwe, {JSON.parse(user).result.name}</h3>
          </Segment>
          <Button primary basic>
            <Link
              to={{
                pathname: "/profile",
                state: { id: JSON.parse(user).result._id },
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
              //history.go(0);
            }}
          >
            Logout
          </Button>
        </Container>
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
