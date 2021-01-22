import React, { useState } from "react";
import CreateAccountForm from "components/Header/CreateAccount/CreateAccountForm";
import ArrowToggle from "components/Header/ArrowToggle";
import styled from "styled-components";

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function CreateAccount() {
  return (
    <StyleWrapper>
      <ArrowToggle label="Create Account" component={CreateAccountForm} />
    </StyleWrapper>
  );
}

export default CreateAccount;
