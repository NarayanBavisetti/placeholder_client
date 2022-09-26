import Login from "./Login/index"
import SignUp from "./SignUp/index"
import Home from "./Home";
import "../assets/css/common.css";
import { Route, Routes } from "react-router-dom";

const MainComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </>
  );
};

export default MainComponent;
