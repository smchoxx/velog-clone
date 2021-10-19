import React from "react";
//elements
import FlexBox from "../elements/FlexBox";
import Button from "../elements/Button";
//components
import UserList from "../components/UserList";
import UserInfo from "../components/UserInfo";
const UserPage = (props) => {
  return (
    <React.Fragment>
      <UserInfo />
      <UserList />
    </React.Fragment>
  );
};

export default UserPage;