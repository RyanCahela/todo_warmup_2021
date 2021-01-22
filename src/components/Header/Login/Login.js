import React, { useState } from "react";
import ArrowToggle from "components/Header/ArrowToggle";
import LoginForm from "components/Header/Login/LoginForm";

function Login() {
  return <ArrowToggle label="Log In" component={LoginForm} />;
}

export default Login;
