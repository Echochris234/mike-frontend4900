import React from "react";
import { useDispatch } from "react-redux";
import { getFollower, getFollowing } from "../../_actions/followers";
import { Card, Icon } from "semantic-ui-react";
function Follow(props) {
  const id = props.id;
  const dispatch = useDispatch();
  dispatch(getFollower(id));
  dispatch(getFollowing(id));

  return (
    <div>
      <Card>
        <Card.Content extra>
          <Icon name="user" />
          {localStorage.getItem("followers")} Followers
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          {localStorage.getItem("following")} Following
        </Card.Content>
      </Card>
    </div>
  );
}

export default Follow;
