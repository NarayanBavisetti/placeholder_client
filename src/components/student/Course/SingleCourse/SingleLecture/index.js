import "../../course.css";

const SingleLecture = (props) => {
  return (
    <>
      <div className="card single-lecture">
        <h3 className="card-subtitle">{props.title}</h3>
        <div className="card-body">
          <p className="font-xss text-muted">{props.children}</p>
        </div>
        <div className="card-footer">
          <a href={props.link} target="_blank" className="btn-theme">
            Watch&nbsp;&nbsp;<i className="fas fa-play"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleLecture;
