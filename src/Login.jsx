import React, { useState } from "react";
import "./Styles/login.css";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    
    if (!password.trim() || password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }
    
    const storedUser = JSON.parse(localStorage.getItem("userData"))
    
    if (!storedUser || storedUser.email != email && storedUser.password != password) {
        alert("Invalid email or password")
        return;
    }
alert("Login Successful")
  };

  return (
    <>
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
                        <h1 className="welcome">Welcome Back</h1>
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
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          placeholder="Email"
                          required
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
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          required
                        />
                      </div>
                      <div className="forget-password-cont">
                        <div className="forget-password-content">
                          <a href="/" className="forget">
                            Forget Pasword
                          </a>
                        </div>
                      </div>
                      <div className="forget-password-cont">
                        <div className="forget-password-content">
                          Don't have an account?
                          <a href="/register" className="forget">
                            create
                          </a>
                        </div>
                      </div>
                      <div className="button-cont">
                        <button className="button" onClick={handleSubmit}>
                          Login
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
    </>
  );
}

export default Login;
