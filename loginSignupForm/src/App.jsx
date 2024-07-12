import { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  let [buttonStatus, setButtonStatus] = useState("");

  const toggle = () => {
    setButtonStatus(!buttonStatus);
  };

  if (buttonStatus === "") {
    return (
      <div className="intro1 d-flex justify-content-center align-items-center flex-column p-3 bg-success text-white border border-success rounded-3">
        <h1>Welcome to the website</h1>
        <p>Click on button as per your need</p>
        <button
          className="btn1 p-3 bg-success text-white border-3 border-black rounded-2"
          onClick={() => setButtonStatus(false)}
        >
          Sign Up
        </button>
        <button
          className="btn1 p-3 bg-success text-white border-3 border-black rounded-2"
          onClick={() => setButtonStatus(true)}
        >
          Login
        </button>
      </div>
    );
  }
  return (
    <>{buttonStatus ? <Login func={toggle} /> : <SignUp func={toggle} />}</>
  );
};
export default App;
