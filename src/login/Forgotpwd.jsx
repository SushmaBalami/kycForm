import React from "react";
import "../login/Login.css";
import Layout from "../Layout/Layout";
import { CiMail} from "react-icons/ci";

const Forgotpwd= () => {
 

  return (
    <>
      <Layout>
        <div className="container">
          <div className="logo-field">
            <div className="logo-name">Forgot Password</div>
          </div>
          <div className="login">
            <form action="#">
              <div className="input-container">
                <CiMail className="input-icon" />
                <input type="email" placeholder="Email Address" />
              </div>
            </form>
          </div>
          <button
            onClick={() => {
              alert("successfully proceed");
            }}
          >
            Reset Password
          </button>
          <div className="fields">
            <a href="/login" style={{textAlign:"center", display:"flex", justifyContent:"center", textDecoration:"none"}} >Back to login</a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Forgotpwd;
