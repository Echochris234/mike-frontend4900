import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../_actions/auth.js";
import { Button, Segment, Form } from "semantic-ui-react";
import Posts from "./Posts.js";
import Follow from "./Follow.js";
import CreatePost from "../Home/CreatePost.js";
import { uploadPic, getPic } from "../../_actions/profilePic.js";

function Profile(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const id =
    props.location.state.id ||
    JSON.parse(localStorage.getItem("userInfo")).result._id;
  const token =
    props.token || JSON.parse(localStorage.getItem("userInfo")).token;
  const [file, updateFile] = useState(null);
  useEffect(() => {
    dispatch(getPic(id));
  }, [id, dispatch]);
  const profilePic = useSelector((state) => state.profilePic.prof.data) || "";
  return (
    <div>
      {profilePic.result && (
        <img src={`data:image/png;base64,${profilePic.result.picName}`} />
      )}
      <Button
        primary
        basic
        onClick={() => {
          history.push("/", setTimeout(400));
        }}
      >
        Home
      </Button>
      <Segment>
        <Form>
          <Form.Field>
            <input
              name="image"
              type="file"
              onChange={(e) => updateFile(e.target.files[0])}
            />
          </Form.Field>
          <Button
            primary
            basic
            onClick={(e) => {
              let formData = new FormData();
              formData.append(
                "name",
                JSON.parse(localStorage.getItem("userInfo")).result._id
              );
              formData.append("image", file);
              dispatch(uploadPic(formData, id, token));
              dispatch(getPic(id));
            }}
          >
            Set Profile Picture
          </Button>
        </Form>
      </Segment>
      <Follow id={id} />
      <Posts id={id} location="profile" />
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
