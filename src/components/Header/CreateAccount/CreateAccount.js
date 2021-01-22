import React, { useState } from "react";
import CreateAccountForm from "components/Header/CreateAccount/CreateAccountForm";
import ArrowToggle from "components/Header/ArrowToggle";

function CreateAccount() {
  return <ArrowToggle label="Create Account" component={CreateAccountForm} />;
}

export default CreateAccount;
