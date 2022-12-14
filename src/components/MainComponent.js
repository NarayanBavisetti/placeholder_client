import Login from "./student/Login/index";
import SignUp from "./student/SignUp/index";
import Home from "./Home/index";

// Student Routes
import StudentSidebar from "./student/Sidebar/index";
import StudentCourseList from "./student/Course/List/index";
import StudentSingleCourse from "./student/Course/SingleCourse/index";
import StudentSingleLecture from "./student/Course/SingleLecture/index";
import ForumList from "./student/Forum/List/index";
import SingleForum from "./student/Forum/SingleForum/index";

// Educator Routes
import EducatorSidebar from "./educator/Sidebar/index";
import EducatorCourseList from "./educator/Course/List/index";
import EducatorCreateCourse from "./educator/Course/Create/index";

import "../assets/css/common.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

const MainComponent = () => {
  const [person, setPerson] = useState();

  useEffect(() => {
    if (localStorage.getItem("data") != null) {
      let data = JSON.parse(localStorage.getItem("data"));
      setPerson(data.personType);
    }
  }, [person]);

  return (
    <>
      {person === "STUDENT" ? <StudentSidebar /> : null}
      {person === "EDUCATOR" ? <EducatorSidebar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />

        {/* Student Routes */}
        {person != undefined ? (
          <>
            {person === "STUDENT" ? (
              <>
                <Route path="/course" element={<StudentCourseList />} />
                <Route path="/course/:id" element={<StudentSingleCourse />} />
                <Route
                  path="/course/lecture/:id"
                  element={<StudentSingleLecture />}
                />
                <Route path="/forum" element={<ForumList />} />
                <Route path="/forum/:id" element={<SingleForum />} />
              </>
            ) : null}

            {/* Educator Routes */}
            {person === "EDUCATOR" ? (
              <>
                <Route
                  path="/educator/course/:id"
                  element={<EducatorCourseList />}
                />
                <Route
                  path="/educator/course/create"
                  element={<EducatorCreateCourse />}
                />
              </>
            ) : null}
          </>
        ) : null}
      </Routes>
    </>
  );
};

export default MainComponent;
