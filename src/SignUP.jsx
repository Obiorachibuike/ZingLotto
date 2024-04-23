import React, { useState } from "react";
// import "./Styles/signup.css";

import { generateReferalLink } from './Function/generateReferalLink';

function SignUP() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const existingData  = JSON.parse(localStorage.getItem("userData")) || {}
 

  const handleSubmit = (e) => {
    e.preventDefault();
   

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      
        alert("Please enter a valid email address")
        return;
      }

      if (!password.trim() || password.length < 8) {
       alert("Password must be at least 8 characters long")
       return;
      }
      if (password !== confirmPassword) {
     alert("Password are not the same")
        return;
      }

   
const user = {email,password}

const mergeData = {...existingData, ...user}

localStorage.setItem("userData", JSON.stringify(mergeData))

    const referalLink = generateReferalLink();
      console.log(referalLink);
    alert(referalLink);
 setPassword("")
 setConfirmPassword("")
 setEmail(" ")
};

  return (
    <div>
      <div className="login-page-container">
        <div className="login-page-cont">
          <div className="login-page-content">
            <div className="form-cont">
              <form action="" className="form">
                <div className="form-content">
                  <div className="left-form-cont">
                    <div className="left-form-content">
                      <img src="./Logo.pdf.jpg" alt="" className="form-image" />
                    </div>
                  </div>
                  <div className="right-form-cont">
                    <div className="right-form-content">
                      <div className="form-title-cont">
                        <h1 className="form-title">Sign Up</h1>
                      </div>
                      <div className="input-cont">
                        <label htmlFor="" className="input-title">
                          Email
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="input"
                          placeholder="Email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>
                      <div className="input-cont">
                        <label htmlFor="" className="input-title">
                          Password
                        </label>
                        <input
                          type="password"
                          name=""
                          id=""
                          className="input"
                          placeholder="Password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                      </div>
                      <div className="input-cont">
                        <label htmlFor="" className="input-title">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name=""
                          id=""
                          className="input"
                          placeholder="Confirm Password"
                          required
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          value={confirmPassword}
                        />
                      </div>
                      <div className="forget-password-cont">
                        <div className="forget-password-content">
                          Already have an account?
                          <a href="/login" className="forget">
                            login
                          </a>
                        </div>
                      </div>

                      <div className="button-cont">
                        <button className="button" onClick={handleSubmit}>
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUP;
