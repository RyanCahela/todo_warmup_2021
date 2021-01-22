import React from "react";
import firebase from "services/firebase";

function Logout() {
  function handleLogout(e) {
    firebase.auth().signOut();
  }
  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
