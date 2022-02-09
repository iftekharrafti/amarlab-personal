import React,{ useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Register.module.css";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const {registerUser} = useAuth()
  const navigate = useNavigate();

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value

    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(registerData.email, registerData.password, navigate)
  }

  return (
    <div className="login">
      <div className="container">
        <h2 className={classes.top}>
          <span className={classes.registerTitle}>Register</span>
        </h2>
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className={classes.registerForm}>
              <form action="" onSubmit={handleSubmit}>
              {/* <input
                className="form-control mb-2"
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={handleChange}
              /> */}
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
              <input className={classes.registerSubmit} type="submit" value="Register" />
              </form>
              <p className="my-3">Already Register? <Link to='/login'>Login Here</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
