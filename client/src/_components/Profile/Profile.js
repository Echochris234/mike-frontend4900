import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../_actions/auth.js";
import { Button, Segment } from "semantic-ui-react";
import Posts from "./Posts.js";
import Follow from "./Follow.js";
import CreatePost from "../Home/CreatePost.js";

function Profile(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = props.id || props.location.state.id;
  const token = props.token || props.location.state.token;
  const [currMax, setcurrMax] = useState(10);
  return (
    <div>
      <Follow id={id} />
      <Posts id={id} token={token} currMax={currMax} />
      <Segment>
        <Button
          primary
          basic
          onClick={() => {
            setcurrMax(currMax + 5);
          }}
        >
          Load More...
        </Button>
        <Button
          primary
          basic
          onClick={() => {
            if (currMax <= 5) {
              setcurrMax(1);
            } else {
              setcurrMax(currMax - 5);
            }
          }}
        >
          Load Less...
        </Button>
      </Segment>
      <CreatePost id={id} token={token} />

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
