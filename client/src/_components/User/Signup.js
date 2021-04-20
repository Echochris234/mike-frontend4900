import React, { useState } from "react";
import { Form, Grid, Segment, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../../_actions/auth";

export default function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <Segment basic padded textAlign="center">
        <Grid>
          <Form
            onSubmit={(e) => {
              dispatch(signup(user));
              history.push("/");
            }}
          >
            <Form.Group>
              <Form.Input
                type="text"
                value={user.name}
                placeholder="Enter your Name"
                onChange={(event) =>
                  setUser({ ...user, name: event.target.value })
                }
              />
              <Form.Input
                type="email"
                value={user.email}
                placeholder="Enter your E-mail"
                onChange={(event) =>
                  setUser({ ...user, email: event.target.value })
                }
              />
              <Form.Input
                type="password"
                value={user.password}
                placeholder="Enter your Password"
                onChange={(event) =>
                  setUser({ ...user, password: event.target.value })
                }
              />
              <Form.Input
                type="password"
                value={user.confirmPassword}
                placeholder="Confirm your Password"
                onChange={(event) =>
                  setUser({ ...user, confirmPassword: event.target.value })
                }
              />
            </Form.Group>
            <Button type="submit">Signup</Button>
          </Form>
        </Grid>
      </Segment>
    </div>
  );
}
