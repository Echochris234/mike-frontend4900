import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollower, getFollowing } from "../../_actions/followers";
import { Card, Icon } from "semantic-ui-react";
function Follow(props) {
  const id = props.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFollower(id));
    dispatch(getFollowing(id));
  }, [id, dispatch]);
  const followCount = useSelector((state) => state.getFollow);
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
      </Card>
    </div>
  );
}

export default Follow;
