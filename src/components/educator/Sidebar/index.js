import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [sidebar, showSidebar] = useState(false);

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
          <Link to="/educator/course/" className="single-link">
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
          <Link to="*" className="single-link">
            <div className="icon">
              <i className="fas fa-sign-out-alt"></i>
            </div>
            <span>Sign Out</span>
          </Link>
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
