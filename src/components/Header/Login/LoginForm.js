import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("sumit");
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          id="login-email"
          name="login-email"
        />
        <label htmlFor="login-password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          id="login-password"
          name="login-password"
        />
        <button type="submit">Login</button>
      </Form>
    </>
  );
}

export default LoginForm;
