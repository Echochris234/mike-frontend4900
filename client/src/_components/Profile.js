import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../_actions/auth.js";
import { Button, Segment } from "semantic-ui-react";
import Posts from "./Posts.js";
import Follow from "./Follow.js";

function Profile(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = props.location.state;
  return (
    <div>
      <Follow id={id} />
      <Posts id={id} />
      <Segment basic padded="very">
        <Button
          primary
          basic
          onClick={(e) => {
            dispatch(
              logout(JSON.parse(localStorage.getItem("userData")).token)
            );
            history.push("/");
          }}
        >
          Logout
        </Button>
      </Segment>
    </div>
  );
}

export default Profile;
