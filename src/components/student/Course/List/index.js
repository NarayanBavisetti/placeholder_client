import { useState } from "react";
import SingleCourse from "./Single/index";

const CourseList = () => {
  const [all, setAll] = useState(true);
  const [jee, setJee] = useState(false);
  const [neet, setNeet] = useState(false);
  const [upsc, seUpsc] = useState(false);
  const [gate, setGate] = useState(false);
  const [cat, setCat] = useState(false);

  return (
    <>
      <main className="">
        <h1 className="page-title">All courses</h1>
        <div className="page-content">
          <div className="filters">
            <div
              className={"single-filter " + (all ? "active" : null)}
              onClick={() => setAll(!all)}
            >
              All
            </div>
            <div className={"single-filter " + (jee ? "active" : null)}>
              Jee Mains/Advance
            </div>
            <div className={"single-filter " + (neet ? "active" : null)}>
              NEET
            </div>
            <div className={"single-filter " + (upsc ? "active" : null)}>
              UPSC
            </div>
            <div className={"single-filter " + (gate ? "active" : null)}>
              GATE
            </div>
            <div className={"single-filter " + (cat ? "active" : null)}>
              CAT
            </div>
          </div>
          <div className="row grid2">
            <SingleCourse
              title="Course 1"
              educator="Aaryan Khandelwal"
              date="06-10-2022"
              category="NEET"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit nemo atque itaque perferendis at vitae consequuntur,
              magni inventore facere architecto voluptas illum ratione ut soluta
              enim. Autem nam blanditiis quod!
            </SingleCourse>
            <SingleCourse
              title="Course 2"
              educator="Aaryan Khandelwal"
              date="06-10-2022"
              category="GATE"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              quibusdam enim laborum porro maxime harum, ex optio amet
              laboriosam accusamus?
            </SingleCourse>
          </div>
        </div>
      </main>
    </>
  );
};

export default CourseList;
