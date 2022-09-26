import Login from "./student/Login/index";
import SignUp from "./student/SignUp/index";
import Home from "./Home/index";

// Student Routes
import StudentSidebar from "./student/Sidebar/index";
import StudentCourseList from "./student/Course/List/index";
import StudentSingleCourse from "./student/Course/SingleCourse/index";
import StudentSingleLecture from "./student/Course/SingleLecture/index";

// Educator Routes
import EducatorSidebar from "./educator/Sidebar/index";
import EducatorCourseList from "./educator/Course/List/index";
import EducatorCreateCourse from "./educator/Course/Create/index";

import "../assets/css/common.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

const MainComponent = () => {
  return (
    <>
      <StudentSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />

        {/* Student Routes */}
        <Route path="/course" element={<StudentCourseList />} />
        <Route path="/course/:id" element={<StudentSingleCourse />} />
        <Route path="/course/lecture/:id" element={<StudentSingleLecture />} />

        {/* Educator Routes */}
        <Route path="/educator/course" element={<EducatorCourseList />} />
        <Route
          path="/educator/course/create"
          element={<EducatorCreateCourse />}
        />
      </Routes>
    </>
  );
};

export default MainComponent;
