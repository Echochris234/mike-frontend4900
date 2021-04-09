import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export default function Landing() {
  let loggedIn;
  let userName = "";
  let userData = localStorage.getItem("userData");
  if (userData) {
    loggedIn = true;
    userName += `, ${JSON.parse(userData).data.result.name}`;
  } else {
    loggedIn = false;
  }

  let history = useHistory();

  if (loggedIn) {
    return (
      <div>
        <Container>
          <Segment basic padded="very">
            <h3>Welcome back to TweTwe{userName}</h3>
          </Segment>
          <Button primary basic>
            <Link to="/profile">Profile</Link>
          </Button>
          <Button
            primary
            basic
            onClick={() => {
              localStorage.setItem("userData", "");
              userData = "";
              history.push("/");
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
      </div>
    );
  }
}
