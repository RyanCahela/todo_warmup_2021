import React from "react";
import CreateAccount from "components/Header/CreateAccount/CreateAccount";
import Login from "components/Header/Login/Login";
import Logout from "components/Header/Logout/Logout";
import styled from "styled-components";

const StyleWrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
`;

function Header(props) {
  const { user } = props;

  return (
    <StyleWrapper>
      <h2>Todo Warmup 2021</h2>
      <CreateAccount />
      <Login />
      <Logout />
      <p>{user?.email ? user.email : "logged out"}</p>
    </StyleWrapper>
  );
}

export default Header;
