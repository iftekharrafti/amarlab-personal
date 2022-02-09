import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { signInWithGoogle, loginUser } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, navigate)
    console.log(loginData?.email, loginData?.password);
  }

  return (
    <div className="login">
      <div className="container">
        <h2 className={classes.top}>
          <span className={classes.loginTitle}>Login</span>
        </h2>
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className={classes.loginForm}>
              <form action="" onSubmit={handleSubmit}>
                <input
                  className="form-control mb-2"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                onChange={handleChange}
                />
                <input
                  className="form-control mb-2"
                  type="password"
                  placeholder="Your Password"
                  name="password"
                onChange={handleChange}
                />
                <input
                  className={classes.loginSubmit}
                  type="submit"
                  value="Login"
                />
              </form>
              <p className="my-3">
                New user? <Link to="/register">Register Here</Link>
              </p>
              <button
                onClick={() => signInWithGoogle(navigate)}
                className={`${classes.loginGoogle}`}
              >
                <i className={`fab fa-google ${classes.loginGoogleIcon}`}></i>{" "}
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
