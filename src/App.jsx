import { useState } from "react";
import "./App.css";
import signInWithGoogle from "./components/firebase";

const App = () => {
  const signInHandler = () => {
    signInWithGoogle();
  };
  const logoutHandler = () => {
    localStorage.clear();
  };

  let user = localStorage.getItem("user");
  let name = localStorage.getItem("username");
  let email = localStorage.getItem("email");
  let profilePic = localStorage.getItem("profilePic");
  console.log(name + " " + email + " " + profilePic);
  return (
    <main>
      Hello World
      {!user ? (
        <>
          <button onClick={signInHandler} className="signin-btn">
            <img
              src="https://img.icons8.com/fluency/48/null/google-logo.png"
              alt="google logo"
              width={20}
              height={20}
            />
            &nbsp;
            <span>Sign In with Google</span>
          </button>
        </>
      ) : (
        <>
          <div>
            <p>{name}</p>
            <p>{email}</p>
            <img src={profilePic} alt="profile pic" title={name} />
          </div>
          <button onClick={logoutHandler}>Logout</button>
        </>
      )}
    </main>
  );
};

export default App;
