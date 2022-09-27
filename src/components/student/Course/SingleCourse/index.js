import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../../../features/auth/auth-header";
import SingleLecture from "./SingleLecture/index";
import { useNavigate, useParams } from "react-router-dom";

const SingleCourse = () => {
  const params = useParams();
  const [course, setCourse] = useState([]);
  const [courseDetails, setCouseDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    allCourses();
  }, []);

  const allCourses = async () => {
    try {
      axios
        .get(`${process.env.REACT_APP_URL}/course/${params.id}`, {
          headers: authHeader(),
        })
        .then((response) => {
          setCouseDetails(response.data);
          setCourse(response.data.lectures);
        })
        .catch((response) => {
          alert(response.response.data.message);
        });
    } catch (err) {
      navigate("/");
    }
  };

  return (
    <>
      <main>
        <h1 className="page-title">{courseDetails.title}</h1>
        <div className="page-content">
          <div className="row">
            <div className="card course-info">
              <h2 className="card-title">by {courseDetails.educatorName}</h2>
              <div className="card-body">
                <p className="font-xs text-muted">
                  {courseDetails.description}
                </p>
              </div>
            </div>
          </div>
          <div className="row grid3">
            {course.map((item, index) => {
              return (
                <>
                  <SingleLecture
                    title={item.title}
                    link={item.video}
                    key={index}
                  >
                    {item.description}
                  </SingleLecture>
                </>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleCourse;
