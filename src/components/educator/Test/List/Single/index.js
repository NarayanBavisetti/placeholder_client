import { Link } from "react-router-dom";
import "../../test.css";

const SingleTest = (props) => {
  return (
    <>
      <div className="card single-test">
        <h2 className="card-title">{props.title}</h2>
        <div className="card-body">
          <p className="desc">{props.children}</p>
        </div>
      </div>
    </>
  );
};

export default SingleTest;
