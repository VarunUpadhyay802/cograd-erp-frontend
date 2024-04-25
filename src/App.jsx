import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
// import HomePage from "./HomePage";
import SchoolLogin from "./pages/SchoolLogin";
import SchoolHomePage from "./pages/SchoolHomePage";
import SchoolExpenses from "./pages/SchoolExpenses";
import SchoolStaff from "./pages/SchoolStaff";
import SchoolAddClasses from "./pages/SchoolAddClasses";
import AddSubjects from "./pages/AddSubjects";
import SchoolRegister from "./pages/SchoolRegister";
import HomePage from "./pages/HomePage";
import TeacherAttendance from "./pages/TeacherAttendance";
import Protected from "./components/Protected";
import ChooseUser from "./pages/ChooseUser";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherOptions from "./pages/TeacherOptions";
import TeacherRegistration from "./pages/TeacherRegistration";
import TeacherDashBoard from "./pages/TeacherDashBoard";

import ClassTeacherRegistration from "./pages/ClassTeacherRegistration";

import ClassTeacherDashBoard from "./pages/ClassTeacherDashBoard"

import ClassTeacherLogin from "./pages/ClassTeacherLogin";

import StudentAttendance from "./pages/StudentAttendance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/expenses",
        element: (
          <Protected>
            <SchoolExpenses />
          </Protected>
        ),
      },
      {
        path: "/staffs",
        element: (
          <Protected>
            <SchoolStaff />
          </Protected>
        ),
      },
      {
        path: "/subjects",
        element: (
          <Protected>
            <AddSubjects />
          </Protected>
        ),
      },
      {
        path: "/classes",
        element: (
          <Protected>
            <SchoolAddClasses />
          </Protected>
        ),
      },
      {
        path: "/teacherChoose",
        element: (
          <Protected>
            <TeacherOptions />
          </Protected>
        ),
      },
    ],
  },
  {
    path: "/schoolRegister",
    element: <SchoolRegister />,
  },
  {
    path: "/schoolLogin",
    element: <SchoolLogin />,
  },
  {
    path: "/chooseUser",
    element: <ChooseUser />,
  },
  {
    path: "/teacherLogin",
    element: <TeacherLogin />,
  },
  {
    path: "/classTeacherLogin",
    element: <ClassTeacherLogin />,
  },
  {
    path: "/teacherAttendance",
    element: <TeacherAttendance />,
  },
  {
    path: "/teacherRegistration",
    element: <TeacherRegistration />,
  },
  {
    path: "/teacher/dashboard",
    element: <TeacherDashBoard />,
  },
  {
    path: "/student-mark",
    element: <StudentAttendance />,
  },
  {
    path: "/classTeacherRegistration/:teacherId",
    element: <ClassTeacherRegistration />,
  },
  {
    path: "/classTeacherDashBoard",
    element: <ClassTeacherDashBoard />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
