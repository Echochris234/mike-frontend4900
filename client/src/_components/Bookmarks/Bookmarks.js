import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarks } from "./../../_actions/bookmarks.js";
import { Item, Button, Icon } from "semantic-ui-react";
import { removeBookmark } from "../../_actions/bookmarks";
import { likePost } from "../../_actions/handlePosts";

function Bookmarks(props) {
  const userID = props.id || props.location.state.id;
  const token = props.token || props.location.state.token;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks(userID, token));
  }, [userID, token, dispatch]);

  const bookmarkIDs = useSelector((state) => state.bookmarks.bookmarks) || [];
  if (bookmarkIDs.length !== 0) {
    return (
      <div>
        <Item.Group relaxed="very">
          {bookmarkIDs.map((bookmark, index) => (
            <div className={index}>
              <Item>
                <Item.Image size="small" src="" />
                <Item.Content>
                  <Item.Header as="a">{bookmark.author.name}</Item.Header>
                  <Item.Description>{bookmark.article}</Item.Description>
                  <Item.Extra>
                    <div>
                      <Icon name="star">{bookmark.likes.length}</Icon>
                      <br />
                      <Button
                        onClick={(e) => {
                          dispatch(likePost(bookmarkIDs[index]._id, token));
                          dispatch(getBookmarks(userID, token));
                        }}
                      >
                        Like
                      </Button>
                    </div>
                    <Button
                      primary
                      basic
                      onClick={(e) => {
                        dispatch(removeBookmark(userID, bookmark, token));
                      }}
                    >
                      Delete Bookmark
                    </Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </div>
          ))}
        </Item.Group>
      </div>
    );
  } else {
    return <div>This user has not bookmarked any posts!</div>;
  }
}

export default Bookmarks;
