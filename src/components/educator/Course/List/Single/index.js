import { Link } from "react-router-dom";
import "../../course.css";

const SingleCourse = (props) => {
  return (
    <>
      <Link to="" className="card single-course">
        <h2 className="card-title">{props.title}</h2>
        <div className="card-body">
          <p className="desc">{props.children}</p>
        </div>
      </Link>
    </>
  );
};

export default SingleCourse;
