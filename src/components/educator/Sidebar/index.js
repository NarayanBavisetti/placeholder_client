import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <div className="logo"></div>
        <div className="links">
          <Link to="/educator/" className="single-link active">
            <div className="icon">
              <i className="fas fa-th"></i>
            </div>
            Dashboard
          </Link>
          <Link to="/educator/course/" className="single-link">
            <div className="icon">
              <i className="fas fa-book"></i>
            </div>
            Courses
          </Link>
          <Link to="/educator/course/create/" className="single-link">
            <div className="icon">
              <i className="fas fa-plus"></i>
            </div>
            Create Course
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
