import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollower, getFollowing } from "../../_actions/followers";
import { Card, Icon, Button } from "semantic-ui-react";
import {
  checkFollowing,
  followUser,
  unfollowUser,
} from "../../_actions/followers.js";

function Follow(props) {
  const id = props.id;
  const token = JSON.parse(localStorage.getItem("userInfo")).token;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFollower(id));
    dispatch(getFollowing(id));
    if (id !== JSON.parse(localStorage.getItem("userInfo")).result._id)
      dispatch(
        checkFollowing(
          JSON.parse(localStorage.getItem("userInfo")).result._id,
          id,
          token
        )
      );
  }, []);
  const followCount = useSelector((state) => state.getFollow);
  let following = useSelector((state) => state.following.following);
  return (
    <div>
      <Card>
        <Card.Content extra>
          <Icon name="user" />
          {followCount.Followers} Followers
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          {followCount.Following} Following
        </Card.Content>
        {id !== JSON.parse(localStorage.getItem("userInfo")).result._id && (
          <Card.Content extra>
            {!following ? (
              <Button
                onClick={() => {
                  dispatch(
                    followUser(
                      JSON.parse(localStorage.getItem("userInfo")).result._id,
                      id,
                      token
                    )
                  );
                }}
              >
                Follow
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch(
                    unfollowUser(
                      JSON.parse(localStorage.getItem("userInfo")).result._id,
                      id,
                      token
                    )
                  );
                }}
              >
                Unfollow
              </Button>
            )}
          </Card.Content>
        )}
      </Card>
    </div>
  );
}

export default Follow;
