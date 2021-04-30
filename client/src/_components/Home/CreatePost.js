import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextArea, Segment, Form } from "semantic-ui-react";
import { post } from "../../_actions/handlePosts";

function CreatePost(props) {
  const dispatch = useDispatch();
  const id = props.id;
  const token = props.token;
  const [userPost, updateUser] = useState();
  const [userFile, updateFile] = useState(null);
  return (
    <div>
      <Form>
        <Form.TextArea
          value={userPost}
          name="postArticle"
          placeholder="Add Some Text Here"
          type="text"
          onChange={(e) => {
            updateUser(e.target.value);
          }}
        />
        <input
          type="file"
          name="postExt"
          onChange={(e) => {
            updateFile(e.target.files[0]);
          }}
        />
      </Form>

      <Segment basic>
        <Button
          primary
          basic
          onClick={(e) => {
            let formData = new FormData();
            formData.append("postArticle", userPost);
            formData.append("postUserId", id);
            if (userFile) {
              formData.append("postExt", userFile);
            }
            dispatch(post(token, formData));
            updateUser();
          }}
        >
          Create Post
        </Button>
      </Segment>
    </div>
  );
}

export default CreatePost;
