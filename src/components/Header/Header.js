import React from "react";
import CreateAccount from "components/Header/CreateAccount/CreateAccount";
import LogIn from "components/Header/Login/Login";
import styled from "styled-components";

const StyleWrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
`;

function Header() {
  return (
    <StyleWrapper>
      <h2>Todo Warmup 2021</h2>
      <CreateAccount />
      <LogIn />
    </StyleWrapper>
  );
}

export default Header;
