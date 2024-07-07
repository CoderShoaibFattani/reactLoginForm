import "./index.css";

const Login = () => {
  return (
    <div className="login">
      <h1>Login Form</h1>
      <label htmlFor="">User Name</label>
      <input type="text" />
      <label htmlFor="">Password</label>
      <input type="password" />
    </div>
  );
};

export default Login;
