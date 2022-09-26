import axios from "axios";
import React, { useState,useEffect } from "react";
import authHeader from "../../../features/auth/auth-header";
import SingleCourse from "./Single/index";

const CourseList = () => {

//   const [person, setPerson] = useState();
//   useEffect(() => {
//     if (localStorage.getItem("data") != null) {
//       let data = JSON.parse(localStorage.getItem("data"));
//       setPerson(data.personType);
//     }
//   }, [person]);


// console.log(person)
//   const getCourses = () => {
//     // const id = person._id;
//     axios
//     .get(`${process.env.REACT_APP_URL}/educator/mycourses/${person._id}`, {
//       headers: authHeader(),
//     })
//     .then((response) => {
//       console.log(response);
//       // alert(response.data.message);
//       // navigate("/mycourses");
//     })
//     .catch((response) => {
//       console.log(response.response.data.message);
//     });
//   }
//   useEffect(() => {
//        getCourses();
//   },[])



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
