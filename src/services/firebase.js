import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_JvK9atum0TEGoXY3bPsmYlQrbQKN-do",
  authDomain: "todowarmup2021.firebaseapp.com",
  projectId: "todowarmup2021",
  storageBucket: "todowarmup2021.appspot.com",
  messagingSenderId: "965407846497",
  appId: "1:965407846497:web:f9ef6fc53f75b84b6f3a20",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
