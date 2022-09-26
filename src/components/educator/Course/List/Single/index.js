import { Link } from "react-router-dom";
import "../../course.css";

const SingleCourse = (props) => {
  return (
    <>
      <Link to="" className="card single-course">
        <div className="card-header">
          <div className="info">
            <h2 className="card-title">{props.title}</h2>
            <h3 className="educator-name">by {props.educator}</h3>
          </div>
        </div>
        <div className="card-body">
          <p className="desc">{props.children}</p>
        </div>
      </Link>
    </>
  );
};

export default SingleCourse;
