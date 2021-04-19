import React from "react";
import { useDispatch } from "react-redux";
import { getFollow } from "../../_actions/followers";
import { Card, Icon } from "semantic-ui-react";
function Follow(props) {
  const id = props.id;
  const dispatch = useDispatch();
  dispatch(getFollow(id));

  return (
    <Card centered>
      <Card.Content extra>
        <Icon name="user" />
        {localStorage.getItem("followers")} Followers
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        {localStorage.getItem("following")} Following
      </Card.Content>
    </Card>
  );
}

export default Follow;
