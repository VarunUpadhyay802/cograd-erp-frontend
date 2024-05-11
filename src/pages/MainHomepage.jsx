import { jwtDecode } from "jwt-decode";
import SchoolHomePage from "./School/SchoolHomePage";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import StudentHomePage from "./Students/StudentHomePage";
import SingleStudentHomepage from "./Students/SingleStudent/SingleStudentHomepage";
import TeacherHomePage from "./Teacher/TeacherHomePage";
import ParentHomePage from "./Parent/ParentHomePage";
import AdminHomePage from "./Admin/AdminHomePage";
import ClassTeacherHomePage from "../components/ClassTeacher/ClassTeacherHomePage";

const MainHomepage = () => {
  const schoolToken = Cookies.get("token"); // for principals
  const studentToken = Cookies.get("studentToken"); // for students
  const teacherToken = Cookies.get("teacherToken"); // for teachers
  const classTeacherToken = Cookies.get("classTeacherToken"); // for class teachers
  const parentToken = Cookies.get("parentToken"); // for
  const adminToken = Cookies.get("adminToken")

  return (
    <div>
      {schoolToken && <SchoolHomePage />}
      {studentToken && <SingleStudentHomepage />}
      {teacherToken && <TeacherHomePage />}
      {parentToken && <ParentHomePage />}
      {adminToken && <AdminHomePage />}
      {classTeacherToken && <ClassTeacherHomePage />}
    </div>
  );
};

export default MainHomepage;
