import { MdOutlineMailOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import signup from "./assets/signup.jpg";
import "./App.css";

const Signup = ({ func }) => {
  return (
    <div className="wrapper">
      <div>
        <h1>Sign Up</h1>
        <div className="inputDiv wrapper1">
          <FaUser />
          <input type="text" placeholder="username" className="inputBox" />
        </div>
        <div className="inputDiv wrapper1">
          <MdOutlineMailOutline />
          <input type="email" placeholder="Your Email" className="inputBox" />
        </div>
        <div className="inputDiv wrapper1">
          <RiLockPasswordLine />
          <input type="password" placeholder="Password" className="inputBox" />
        </div>
        <div className="inputDiv wrapper1">
          <RiLockPasswordLine />
          <input
            type="password"
            placeholder="Repeat Your Password"
            className="inputBox"
          />
        </div>
        <div className=" wrapper1">
          <input type="checkbox" />
          <p className="pelement">
            I agree all statements in{" "}
            <strong style={{ textDecoration: "underline" }}>
              Terms of service
            </strong>
          </p>
        </div>
        <button className="btn2">Register</button>
      </div>
      <div className="wrapper2">
        <img src={signup} alt="" height={300} />
        <a href="#" onClick={func}>
          I am already member
        </a>
      </div>
    </div>
  );
};

export default Signup;
