import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, deletePost } from "../../_actions/handlePosts";
import { Item, Icon, Button } from "semantic-ui-react";

function Posts(props) {
  const id = props.id;
  const token = props.token;
  const currMax = parseInt(props.currMax);
  console.log(currMax);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(id));
  }, [id, localStorage.getItem("posts"), dispatch]);

  const posts = useSelector((state) => state.getPosts.result) || [];
  var size = posts.length;
  if (posts.length !== 0) {
    return (
      <div>
        {console.log(currMax)}
        <Item.Group centered relaxed="very">
          {posts.slice(0, currMax).map((post, index) => (
            <div class={index}>
              <Item>
                <Item.Image size="small" src="" />
                <Item.Content>
                  <Item.Header as="a">{post.author.name}</Item.Header>
                  <Item.Description>{post.article}</Item.Description>
                  <Item.Extra>
                    {" "}
                    <div>
                      <Icon name="star">{post.likes.length}</Icon>
                    </div>
                    <div>
                      <Icon name="x">
                        <Button
                          onClick={(e) => {
                            console.log(posts[index]._id);
                            dispatch(deletePost(posts[index]._id), token);
                          }}
                        >
                          Delete
                        </Button>
                      </Icon>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </div>
          ))}
        </Item.Group>
      </div>
    );
  } else {
    return <div>This user has no posts!</div>;
  }
}

export default Posts;
