import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authHeader from "../../../features/auth/auth-header";
import SingleCourse from "./Single/index";

const CourseList = () => {

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
      <main>
        <h1 className="page-title">All courses</h1>
        <div className="page-content">
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
