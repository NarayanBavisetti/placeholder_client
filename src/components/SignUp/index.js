import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUpUser, reset } from "../features/auth/authSlice";
import auth from "../../assets/images/auth.png";
import google from "../../assets/images/google.png";
import "../Login/login.css";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert("Error while signing in");
    }
    if (isSuccess || data) {
      navigate("/");
      alert("Login Successfull");
    }
    dispatch(reset());
  }, [data, isError, isSuccess, message, isLoading, navigate, dispatch]);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  const onSubmit = () => {
    const values = {
      name,
      email,
      password,
      loginType:"AUTH"
    };
    console.log(values);
    dispatch(signUpUser(values));
    setSection(2);
  };
  const googleFailure = (error) => {
    console.log(error);
  };

  const googleSuccess = async (res) => {

    // console.log(res);
    const name = res.profileObj.name;
    const email = res.profileObj.email;
    const values = {
      name,
      email,
      loginType:"GOOGLE"
    };
    console.log(values);
    navigate("/");
    // res.tokenId;
    // res.profileObj.name;
    // res.profileObj.email;
    // res.profileObj.imageUrl
  };
  const [section, setSection] = useState(1);

  return (
    <>
      <main className="auth-container">
        <div className="auth-header">
          <img src={auth} className="w-100" alt="Auth Background" />
        </div>
        <div className="auth-body">
          <section
            className={
              "auth-section section1 " + (section === 1 ? "active" : null)
            }
          >
            <div className="row" style={{ gridRowGap: "1rem" }}>
              <div class="input-group">
                <input
                  type="text"
                  id="fname"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name*"
                  required
                />
                <label for="fname">Full Name*</label>
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
                <input
                  type="password"
                  id="cpassword"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Confirm Password*"
                  required
                />
                <label for="cpassword">Confirm Password*</label>
              </div>
              <div class="input-group">
                <button className="w-100" onClick={onSubmit}>
                  Signup
                </button>
              </div>
              <div className="text-center text-dark-grey">or</div>
              <GoogleLogin
                clientId={process.env.REACT_APP_CLIENT_ID}
                cookiePolicy="single_host_origin"
                render={(renderProps) => (
                  <div className="input-group">
                    <button
                      className="google w-100"
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
              />
            </div>
          </section>
          {/* <section
            className={
              "auth-section section2 " + (section === 2 ? "active" : null)
            }
          >
            <div className="row" style={{ gridRowGap: "1rem" }}>
              <div class="input-group">
                <input
                  type="text"
                  id="otp"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="OTP*"
                  required
                />
                <label for="otp">OTP*</label>
              </div>
              <div class="input-group">
                <button className="w-100" onClick={onSubmit}>
                  Send OTP
                </button>
              </div>
            </div>
          </section> */}
        </div>
      </main>
    </>
  );
};

export default SignUp;
