import SingleLecture from "./SingleLecture/index";

const SingleCourse = () => {
  return (
    <>
      <main>
        <h1 className="page-title">Course 1</h1>
        <div className="page-content">
          <div className="row">
            <div className="card course-info">
              <h2 className="card-title">by Educator Name</h2>
            </div>
          </div>
          <div className="row grid3">
            <SingleLecture title="Lecture 1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              non officiis voluptatibus ipsam placeat error.
            </SingleLecture>
            <SingleLecture title="Lecture 2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              non officiis voluptatibus ipsam placeat error.
            </SingleLecture>
            <SingleLecture title="Lecture 3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              non officiis voluptatibus ipsam placeat error.
            </SingleLecture>
            <SingleLecture title="Lecture 4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              non officiis voluptatibus ipsam placeat error.
            </SingleLecture>
            <SingleLecture title="Lecture 5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              non officiis voluptatibus ipsam placeat error.
            </SingleLecture>
            <SingleLecture title="Lecture 6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              non officiis voluptatibus ipsam placeat error.
            </SingleLecture>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleCourse;
