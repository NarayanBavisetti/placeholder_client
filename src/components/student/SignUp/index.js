import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../assets/images/auth.png";
import google from "../../../assets/images/google.png";
import "../Login/login.css";
// import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import authService from "../../features/auth/authServices";
import axios from "axios";
import authHeader from "../../features/auth/auth-header";
import Modal from "../../Modal/index";
import successful from "../../../assets/images/icons/successful.png";
import failed from "../../../assets/images/icons/failed.png";

const SignUp = () => {
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const [token, setToken] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (message) {
      alert(message);
    }
    if (message) {
      navigate("/signin");
      alert("Login Successfull");
    }
  }, [navigate, message]);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const values = {
      name,
      email,
      password,
      personType: "STUDENT",
      loginType: "AUTH",
    };

    axios
      .post(`${process.env.REACT_APP_URL}/signup`, values, {
        headers: authHeader(),
      })
      .then((response) => {
        setModal(
          <Modal
            icon={successful}
            message="Account created successfully."
            buttons={[
              {
                label: "Sign In",
                actions: [() => navigate("/signin")],
              },
            ]}
            close={() => setModal(null)}
          />,
        );
      })
      .catch((response) => {
        setModal(
          <Modal
            icon={failed}
            message="Oops! Account creation unsuccessful. Please try again."
            buttons={[
              {
                label: "Close",
                close: true,
              },
            ]}
            close={() => setModal(null)}
          />,
        );
      });
  };

  const googleFailure = (error) => {
    console.log(error);
  };

  const googleSuccess = async (res) => {
    const name = res.profileObj.name;
    const email = res.profileObj.email;
    const values = {
      name,
      email,
      loginType: "GOOGLE",
    };

    await authService.signUpUser(values).then((res) => {
      setMessage(res.message);
    });
  };

  return (
    <>
      {modal}
      <main className="auth-container">
        <div className="auth-header sign-up"></div>
        <div className="auth-body">
          <div className="row grid2">
            <div className="input-group">
              <input
                type="text"
                id="fname"
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name*"
                required
              />
              <label htmlFor="fname">Full Name*</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                placeholder="Email*"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="mobile">Email</label>
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
            <div className="input-group">
              <input
                type="password"
                id="cpassword"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Confirm Password*"
                required
              />
              <label htmlFor="cpassword">Confirm Password*</label>
            </div>
          </div>
          <div className="message">
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
          <div className="row center-align">
            <div className="input-group">
              <button onClick={onSubmit}>Sign Up</button>
            </div>
            {/* <div>or</div>
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENT_ID}
              cookiePolicy="single_host_origin"
              render={(renderProps) => (
                <div className="input-group">
                  <button
                    className="google"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Continue with Google
                    <img src={google} alt="" />
                  </button>
                </div>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
            /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
