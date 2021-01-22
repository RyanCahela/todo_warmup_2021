import React from "react";
import ArrowToggle from "components/Header/ArrowToggle";
import LoginForm from "components/Header/Login/LoginForm";
import styled from "styled-components";

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

function Login() {
  return (
    <StyleWrapper>
      <ArrowToggle label="Log In" component={LoginForm} />
    </StyleWrapper>
  );
}

export default Login;
