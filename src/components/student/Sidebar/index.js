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
          <Link to="/" className="single-link active">
            <div className="icon">
              <i className="fas fa-th"></i>
            </div>
            <span>Dashboard</span>
          </Link>
          <Link to="/course/" className="single-link">
            <div className="icon">
              <i className="fas fa-book"></i>
            </div>
            <span>Courses</span>
          </Link>
          <Link to="/bookmark/" className="single-link">
            <div className="icon">
              <i className="fas fa-bookmark"></i>
            </div>
            <span>Bookmarks</span>
          </Link>
          <Link to="/student/profile/" className="single-link">
            <div className="icon">
              <i className="fas fa-user"></i>
            </div>
            <span>Profile</span>
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
