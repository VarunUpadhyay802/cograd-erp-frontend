import { jwtDecode } from "jwt-decode";
import SchoolHomePage from "./School/SchoolHomePage";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import StudentHomePage from "./Students/StudentHomePage";
import SingleStudentHomepage from "./Students/SingleStudent/SingleStudentHomepage";
import TeacherHomePage from "./Teacher/TeacherHomePage";
import ParentHomePage from "./Parent/ParentHomePage";

const MainHomepage = () => {
  const schoolToken = Cookies.get("token"); // for principals
  const studentToken = Cookies.get("studentToken"); // for students
  const teacherToken = Cookies.get("teacherToken"); // for teachers
  const classTeacherToken = Cookies.get("classTeacherToken"); // for class teachers
  const parentToken = Cookies.get("parentToken"); // for

  return (
    <div>
      {schoolToken && <SchoolHomePage />}
      {studentToken && <SingleStudentHomepage />}
      {teacherToken && <TeacherHomePage />}
      {parentToken && <ParentHomePage />}
    </div>
  );
};

export default MainHomepage;
