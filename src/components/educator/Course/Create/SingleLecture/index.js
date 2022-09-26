const SingleLecture = (props) => {
  return (
    <>
      <div className="card">
        <h2 className="card-title">Lecture {props.sno} Details</h2>
        <div className="card-body">
          <div className="row">
            <div className="input-group">
              <input
                type="text"
                id={"l" + props.sno + "title"}
                placeholder="Title*"
                required
              />
              <label htmlFor={"l" + props.sno + "title"}>Title*</label>
            </div>
            <div className="input-group">
              <input
                type="text"
                id={"l" + props.sno + "topic"}
                placeholder="Topic*"
                required
              />
              <label htmlFor={"l" + props.sno + "topic"}>Topic*</label>
            </div>
            <div className="input-group">
              <input
                type="url"
                id={"l" + props.sno + "video"}
                placeholder="Video Link*"
                required
              />
              <label htmlFor={"l" + props.sno + "video"}>Video Link*</label>
            </div>
            <div className="input-group">
              <textarea rows="5" placeholder="Description*" required></textarea>
            </div>
          </div>
        </div>
        <div className="card-footer"></div>
      </div>
    </>
  );
};

export default SingleLecture;
