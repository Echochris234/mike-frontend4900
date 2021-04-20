import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts, deletePost } from "../../_actions/handlePosts";
import { Item, Icon, Button } from "semantic-ui-react";

function Posts(props) {
  const id = props.id;
  const token = props.token;
  const currMax = parseInt(props.currMax);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(id));
  }, [id, localStorage.getItem("posts"), dispatch]);
  const posts = useSelector((state) => state.getPosts.result) || [];
  if (posts.length !== 0) {
    return (
      <div>
        <Item.Group relaxed="very">
          {posts.slice(0, currMax).map((post, index) => (
            <div className={index}>
              <Item>
                <Item.Image size="small" src="" />
                <Item.Content>
                  <Item.Header as="a">
                    <Link
                      to={{
                        pathname: `/profile/${post.author.name}`,
                        state: {
                          id: post.author._id,
                          token: token,
                        },
                      }}
                    >
                      {post.author.name}
                    </Link>
                  </Item.Header>
                  <Item.Description>{post.article}</Item.Description>
                  <Item.Extra>
                    {" "}
                    <div>
                      <Icon name="star">{post.likes.length}</Icon>
                    </div>
                    <div>
                      <Button
                        onClick={(e) => {
                          dispatch(deletePost(posts[index]._id), token);
                        }}
                      >
                        <Icon name="x">Delete</Icon>
                      </Button>
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
