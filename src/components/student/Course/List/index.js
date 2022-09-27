import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authHeader from "../../../features/auth/auth-header";
import SingleCourse from "./Single/index";

const CourseList = () => {
  const [all, setAll] = useState(true);
  const [jee, setJee] = useState(false);
  const [neet, setNeet] = useState(false);
  const [upsc, seUpsc] = useState(false);
  const [gate, setGate] = useState(false);
  const [cat, setCat] = useState(false);

  const [course, setCourse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    allCourses();
  }, []);

  const allCourses = async () => {
    try {
      axios
        .get(`${process.env.REACT_APP_URL}/courses`, {
          headers: authHeader(),
        })
        .then((response) => {
          setCourse(response.data);
        })
        .catch((response) => {
          alert(response.response.data.message);
        });
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

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
            {course.map((item, index) => {
              return (
                <>
                  <SingleCourse
                    title={item.title}
                    id={item._id}
                    educator={item.educatorName}
                    date="06-10-2022"
                    category={item.educatorName}
                  >
                    {item.description}
                  </SingleCourse>
                </>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default CourseList;
