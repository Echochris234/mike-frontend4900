import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getUserPosts,
  getPosts,
  deletePost,
  likePost,
} from "../../_actions/handlePosts";
import { Item, Icon, Button, Segment } from "semantic-ui-react";
import { addBookmark } from "../../_actions/bookmarks";

function Posts(props) {
  const id = props.id;
  const token = JSON.parse(localStorage.getItem("userInfo")).token;
  const [currMax, setcurrMax] = useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.location === "landing") {
      dispatch(getPosts());
    }
    if (props.location === "profile") {
      dispatch(getUserPosts(id));
    }
  }, []);

  const posts = useSelector((state) => state.getPosts.postsData) || [];
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
                  <Item>
                    {post.file && (
                      <img src={`data:image/png;base64,${post.file}`}></img>
                    )}
                  </Item>
                  <Item.Extra>
                    {" "}
                    <div>
                      <Icon name="star">{post.likes.length}</Icon>
                      <br />
                      <Button
                        onClick={(e) => {
                          dispatch(likePost(posts[index]._id, token));
                        }}
                      >
                        Like
                      </Button>
                    </div>
                    <div>
                      <Button
                        onClick={(e) => {
                          dispatch(deletePost(posts[index]._id, token));
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                    <div>
                      <Button
                        onClick={(e) => {
                          dispatch(addBookmark(id, posts[index], token));
                        }}
                      >
                        Bookmark Post
                      </Button>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </div>
          ))}
        </Item.Group>
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
      </div>
    );
  } else {
    return <div>This user has no posts!</div>;
  }
}

export default Posts;
