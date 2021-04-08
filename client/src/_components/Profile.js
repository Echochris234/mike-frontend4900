import React from "react";
import { useHistory } from "react-router-dom";

function Profile() {
  let history = useHistory();

  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem("userData", "");
          history.push("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
