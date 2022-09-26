import "../../forum.css";
import userImage from "../../../../../assets/images/user.svg";

const SingleAnswer = (props) => {
  return (
    <>
      <div className="single-answer">
        <div className="user">
          <img src={userImage} alt="User Icon" />
        </div>
        <div className="content">
          <h3 className="name text-muted">{props.name}</h3>
          <p className="text">{props.children}</p>
        </div>
      </div>
    </>
  );
};

export default SingleAnswer;
