import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Form, Button, TextArea, Segment } from "semantic-ui-react";
import { getPosts, post } from "../../_actions/handlePosts";

function CreatePost(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = props.id;
  const token = props.token;
  const [userPost, updateUser] = useState({ userId: id, article: "" });
  return (
    <div>
      <TextArea
        type="text"
        value={userPost.article}
        placeholder="Create a new Post!"
        onChange={(e) => {
          updateUser({ ...userPost, article: e.target.value });
        }}
      ></TextArea>
      <Segment basic>
        <Button
          onClick={(e) => {
            dispatch(post(token, userPost));
            updateUser({ ...userPost, article: "" });
          }}
        >
          Create Post
        </Button>
      </Segment>
    </div>
  );
}

export default CreatePost;
