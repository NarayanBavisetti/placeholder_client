import { Link } from "react-router-dom";
import "../../test.css";

const SingleCourse = (props) => {
  return (
    <>
      <Link
        to="/test/12"
        className="card single-test"
        category={props.category}
      >
        <div className="card-header">
          <div className="info">
            <h2 className="card-title">{props.title}</h2>
            <h3 className="educator-name">by {props.educator}</h3>
          </div>
        </div>
        <div className="card-body">
          <p className="font-sm text-muted">{props.children}</p>
        </div>
      </Link>
    </>
  );
};

export default SingleCourse;
