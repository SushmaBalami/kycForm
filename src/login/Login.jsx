import React, { useState } from "react";
import "../login/Login.css";
import Layout from "../Layout/Layout";
import bibaboo from "../../src/assets/images/bibaabo.jpg";
import { CiMail, CiLock } from "react-icons/ci";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Layout>
        <div className="container">
          <div className="logo-field">
            <img src={bibaboo} alt="image not found" />
            <div className="logo-name">Login to Bibaabo</div>
          </div>
          <div className="login">
            <form action="#">
              <div className="input-container">
                <CiMail className="input-icon" />
                <input type="email" placeholder=" jane@gmail.com" />
              </div>
              <div className="input-container">
                <CiLock className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={`..... ${showPassword ? " " : " "}`}
                  onClick={togglePasswordVisibility}
                />
              </div>
            </form>
          </div>
          <div className="fields">
            <a href="/forgotpassword" style={{color:"black", textDecoration:"none"}}>Forgot password?</a>
          </div>
          <button
            onClick={() => {
              alert("Logged in successfully");
            }}
          >
            Login
          </button>
        </div>
      </Layout>
    </>
  );
};

export default Login;
