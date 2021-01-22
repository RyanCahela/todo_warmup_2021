import React, { useState } from "react";
import styled from "styled-components";

const CreateAccountForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function CreateAccount() {
  //component state
  const [isOpen, setIsOpen] = useState(false);

  //form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("passwords do not match");
    }

    console.dir({
      email,
      password,
      confirmPassword,
    });
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  function handleToggleOpen(e) {
    console.log("toggle");
  }

  return (
    <>
      <h3 onClick={(e) => handleToggleOpen(e)}>Create Account</h3>
      <CreateAccountForm onSubmit={handleSubmit}>
        <label htmlFor="create-account-email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          name="email"
          id="create-account-email"
          required
        />
        <label htmlFor="create-account-password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          id="create-account-password"
          name="create-account-password"
          required
        />
        <label htmlFor="create-account-confirm-password">Password</label>
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          type="password"
          id="create-account-confirm-password"
          name="create-account-confirm-password"
          required
        />
        {errorMessage ? (
          <div style={{ color: "red" }}>{errorMessage}</div>
        ) : null}
        <button type="submit">Create Account</button>
      </CreateAccountForm>
    </>
  );
}

export default CreateAccount;
