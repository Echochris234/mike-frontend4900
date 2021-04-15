import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../_actions/getPosts";
import { Item, Icon } from "semantic-ui-react";

function Posts(props) {
  const id = props.id.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(id));
  }, [localStorage.getItem("posts"), dispatch]);

  const posts = useSelector((state) => state.getPosts.postsData) || [];
  if (posts.length !== 0) {
    return (
      <div>
        <Item.Group centered relaxed="very">
          {posts.map((post) => (
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
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </div>
    );
  } else {
    return <div>This user has no posts!</div>;
  }
}

export default Posts;
