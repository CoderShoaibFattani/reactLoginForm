import "./index.css";

const SignUp = () => {
  return (
    <div className="signup">
      <h1>Sign Up Form</h1>
      <label htmlFor="">User Name</label>
      <input type="text" />
      <label htmlFor="">Email</label>
      <input type="email" />
      <label htmlFor="">Retype Email</label>
      <input type="email" />
      <label htmlFor="">Password</label>
      <input type="password" />
      <label htmlFor="">Confirm Password</label>
      <input type="password" />
    </div>
  );
};

export default SignUp;
