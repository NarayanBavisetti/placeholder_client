import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUpUser, reset } from "../features/auth/authSlice";
import auth from "../../assets/images/auth.png";
import google from "../../assets/images/google.png";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert({ message });
    }
    if (isSuccess || data) {
      navigate("/");
      alert("Login Successfull");
    }
    dispatch(reset());
  }, [data, isError, isSuccess, message, isLoading, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const values = {
      email,
      password,
    };
    console.log(values);
    // dispatch(login(values));
  };

  return (
    <>
      <main className="auth-container">
        <div className="auth-header">
          <img src={auth} className="w-100" alt="Auth Background" />
        </div>
        <div className="auth-body">
          <form onSubmit={onSubmit}>
            <div className="row" style={{ gridRowGap: "1rem" }}>
              <div class="input-group">
                <input
                  type="text"
                  id="username"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username/Mobile No.*"
                  required
                />
                <label for="username">Username/Mobile No.*</label>
              </div>
              <div class="input-group">
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password*"
                  required
                />
                <label for="password">Password*</label>
              </div>
              <div class="input-group">
                <button className="w-100">Login</button>
              </div>
              <div className="text-center text-dark-grey">or</div>
              <div className="input-group">
                <button className="google w-100">
                  Continue with Google
                  <img src={google} alt="" />
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
