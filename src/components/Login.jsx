import React, { useState } from "react";
import "../styles/login.css";
import Logo from "../../public/images/Logo.png";
import Ellipse from "../../public/images/Ellipse.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    checkboxVal: false,
  });
  const submit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every((val) => val !== "")) {
      navigate("/dashboard");
    } else {
      alert("Fields can't be empty");
    }
  };

  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="login-container">
      <img className="logo" src={Logo} />
      <div className="form-box">
        <div className="magicpattern">
          <img className="ellipse" src={Ellipse} />
        </div>
        <form className="form" onSubmit={submit}>
          <h2>Welcome Back...</h2>
          <div className="input-container">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={formDataHandler}
              className="inputBox"
              placeholder="Rachelsakt89"
            />
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={formDataHandler}
              className="inputBox"
              placeholder="Password"
            />
            <div className="remember-me">
              <input
                type="checkbox"
                name="checkboxVal"
                value={formData.checkboxVal}
                className="check-box"
              />
              Remember me
              <button>Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
