import { Link } from "react-router-dom";
import "../../forum.css";

const SingleForum = (props) => {
  return (
    <>
      <Link to="/forum/12" className="card single-forum">
        <h2 className="card-title">{props.children}</h2>
        <div className="card-body">
          <div className="meta">
            <div className="single-meta text-muted">
              <i className="fas fa-user"></i>
              {props.answers} answers
            </div>
            <div className="single-meta text-muted">
              <i className="fas fa-user"></i>
              {props.answers} answers
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleForum;
