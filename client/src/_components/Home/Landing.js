import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Container, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { logout } from "../../_actions/auth.js";
import Login from "../User/Login";
import Profile from "../Profile/Profile";

export default function Landing() {
  var [user, setUser] = useState(localStorage.getItem("userInfo"));
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
                  pathname: "/profile",
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
          </Segment>
        </Container>
        <Profile
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
