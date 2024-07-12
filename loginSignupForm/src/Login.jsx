import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import signup from "./assets/signup.jpg";
import "./App.css";

const Login = ({ func }) => {
  return (
    <div className="wrapper">
      <div className="wrapper2">
        <img src={signup} alt="" height={300} />
        <a href="#" onClick={func}>
          Create an account
        </a>
      </div>
      <div>
        <h1>Log In</h1>
        <div className="inputDiv wrapper1">
          <FaUser />
          <input type="text" placeholder="username" className="inputBox" />
        </div>
        <div className="inputDiv wrapper1">
          <RiLockPasswordLine />
          <input type="password" placeholder="Password" className="inputBox" />
        </div>
        <div className=" wrapper1">
          <input type="checkbox" />
          <p className="pelement">Remember me</p>
        </div>
        <button className="btn2">Log in</button>
      </div>
    </div>
  );
};

export default Login;
