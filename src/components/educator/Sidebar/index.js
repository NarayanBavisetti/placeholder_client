import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import authHeader from "../../features/auth/auth-header";
import "./sidebar.css";

const Sidebar = () => {
  const [sidebar, showSidebar] = useState(false);
  const navigate = useNavigate();
  const [person, setPerson] = useState();
  useEffect(() => {
    if (localStorage.getItem("data") != null) {
      let data = JSON.parse(localStorage.getItem("data"));
      setPerson(data._id);
    }
  }, [person]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    navigate("/signin");
  };

  const getCourses = () => {
    const id = person;
    axios
      .get(`${process.env.REACT_APP_URL}/educator/mycourses/${id}`, {
        headers: authHeader(),
      })
      .then((response) => {
        console.log(response);
        // alert(response.data.message);
        // navigate("/mycourses");
      })
      .catch((response) => {
        console.log(response.response.data.message);
      });
  };

  useEffect(() => {
    getCourses();
  }, [person]);

  return (
    <>
      <nav className={"sidebar " + (sidebar ? "show" : null)}>
        <div className="logo"></div>
        <div className="links">
          <Link to="/educator/" className="single-link active">
            <div className="icon">
              <i className="fas fa-th"></i>
            </div>
            <span>Dashboard</span>
          </Link>
          <Link to={`/educator/course/${person}`} className="single-link">
            <div className="icon">
              <i className="fas fa-book"></i>
            </div>
            <span>Courses</span>
          </Link>
          <Link to="/educator/course/create/" className="single-link">
            <div className="icon">
              <i className="fas fa-plus"></i>
            </div>
            <span>Create Course</span>
          </Link>

          <a
            href="javascript:void(0);"
            onClick={logout}
            className="single-link"
          >
            <div className="icon">
              <i className="fas fa-sign-out-alt"></i>
            </div>
            <span>Sign Out</span>
          </a>

          <a
            href="javascript:void(0);"
            className="single-link sidebar-toggle"
            onClick={() => showSidebar(!sidebar)}
          >
            <div className="icon">
              <i
                className={
                  "fas " + (sidebar ? "fa-arrow-left" : "fa-arrow-right")
                }
              ></i>
            </div>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
