import SingleCourse from "./Single/index";

const CourseList = () => {
  return (
    <>
      <main>
        <h1 className="page-title">All courses</h1>
        <div className="page-content">
          <div className="row grid2">
            <SingleCourse
              title="Course 1"
              educator="Aaryan Khandelwal"
              date="06-10-2022"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit nemo atque itaque perferendis at vitae consequuntur,
              magni inventore facere architecto voluptas illum ratione ut soluta
              enim. Autem nam blanditiis quod!
            </SingleCourse>
            <SingleCourse title="Course 2"></SingleCourse>
          </div>
        </div>
      </main>
    </>
  );
};

export default CourseList;
