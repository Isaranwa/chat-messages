import React from "react";
import {auth} from "../firebase"
import { GoogleAuthProvider,signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to Chat.com</h2>
      <p>Sign in with Google to chat with with your friends</p>
      <button className="sign-in"  onClick={googleSignIn}
          type="button">
        Sign In with Google
      </button>
    </main>
  );
};

export default Welcome;