import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Form, Button, TextArea } from "semantic-ui-react";
import { getPosts, post } from "../../_actions/handlePosts";

function CreatePost(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = props.id;
  const token = props.token;
  const [userPost, updateUser] = useState({ userId: id, article: "" });
  return (
    <div>
      <Form
        onSubmit={() => {
          dispatch(post(token, userPost));
          dispatch(getPosts(id));
          history.push("/");
        }}
      >
        <TextArea
          type="text"
          value={userPost.article}
          placeholder="Create a new Post!"
          onChange={(e) => {
            updateUser({ ...userPost, article: e.target.value });
          }}
        ></TextArea>
        <Button>Create Post</Button>
      </Form>
    </div>
  );
}

export default CreatePost;
