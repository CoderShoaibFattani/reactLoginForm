import { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup";
import "./index.css";

const App = () => {
  let [buttonStatus, setButtonStatus] = useState("");

  const signUpHandler = () => {
    setButtonStatus(false);
  };

  const loginHandler = () => {
    setButtonStatus(true);
  };

  if (buttonStatus === "") {
    return (
      <div className="intro">
        <h1>Welcome to the website</h1>
        <p>Click on button as per your need</p>
        <button className="btn" onClick={signUpHandler}>
          Sign Up
        </button>
        <button className="btn" onClick={loginHandler}>
          Login
        </button>
      </div>
    );
  }
  return (
    <>
      {buttonStatus ? <Login /> : <SignUp />}
      <button className="btnSignup" onClick={signUpHandler}>
        Sign Up
      </button>
      <button className="btnLogin" onClick={loginHandler}>
        Login
      </button>
    </>
  );
};
export default App;
