import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import google from "../../../assets/images/google.png";
import "./login.css";
import axios from "axios";
import authHeader from "../../features/auth/auth-header";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [token, setToken] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
      alert("Login Successfull");
    }
  }, [message, token]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const values = {
      email,
      password,
    };
    axios
      .post(`${process.env.REACT_APP_URL}/signin`, values, {
        headers: authHeader(),
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("data", JSON.stringify(response.data));
        navigate("/");
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <main className="auth-container">
        <div className="auth-header"></div>
        <div className="auth-body">
          <form onSubmit={onSubmit}>
            <div className="row grid2">
              <div className="input-group">
                <input
                  type="text"
                  id="username"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username/Mobile No.*"
                  required
                />
                <label htmlFor="username">Email*</label>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password*"
                  required
                />
                <label htmlFor="password">Password*</label>
              </div>
            </div>
            <div className="message">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
            <div className="row center-align">
              <div className="input-group">
                <button type="submit">Sign In</button>
              </div>
              <div className="text-center text-dark-grey">or</div>
              <div className="input-group">
                <button className="google w-100">
                  Continue with Google
                  <img src={google} alt="Google Logo" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
