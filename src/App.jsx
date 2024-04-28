import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
// import HomePage from "./HomePage";
import SchoolLogin from "./pages/School/SchoolLogin";
import SchoolExpenses from "./pages/School/SchoolExpenses";
import SchoolStaff from "./pages/School/SchoolStaff";
import SchoolAddClasses from "./pages/School/SchoolAddClasses";
import AddSubjects from "./pages/AddSubjects";
import HomePage from "./pages/HomePage";
import TeacherAttendance from "./pages/TeacherAttendance";
import Protected from "./components/Protected";
import ChooseUser from "./pages/ChooseUser";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherOptions from "./pages/TeacherOptions";
import TeacherRegistration from "./pages/TeacherRegistration";
import TeacherDashBoard from "./pages/TeacherDashBoard";

import ClassTeacherRegistration from "./pages/ClassTeacherRegistration";
import SubjectOptions from "./pages/SubjectOptions";
import ClassTeacherDashBoard from "./pages/ClassTeacherDashBoard";

import ClassTeacherLogin from "./pages/ClassTeacherLogin";

import StudentAttendance from "./pages/StudentAttendance";
import StudentRegistrationPage from "./pages/Students/StudentRegistrationPage";
import StudentHomePage from "./pages/Students/StudentHomePage";
import ViewSubjects from "./pages/ViewSubjects";
import SchoolsRegister from "./pages/School/SchoolsRegister";
import SchoolHomePage from "./pages/School/SchoolHomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <HomePage />
      </Protected>
    ),
    children: [
      {
        path: "/",
        element: (
          <Protected>
            <SchoolHomePage />
          </Protected>
        ),
      },
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
      {
        path: "/teacherRegistration",
        element: (
          <Protected>
            <TeacherRegistration />
          </Protected>
        ),
      },
      {
        path: "/teacherAttendance",
        element: (
          <Protected>
            <TeacherAttendance />
          </Protected>
        ),
      },
      {
        path: "/studentRegistration",
        element: (
          <Protected>
            <StudentRegistrationPage />
          </Protected>
        ),
      },
      {
        path: "/subjectsOption",
        element: (
          <Protected>
            <SubjectOptions />
          </Protected>
        ),
      },
      {
        path: "/subjectsOption/view",
        element: (
          <Protected>
            <ViewSubjects />
          </Protected>
        ),
      },
      {
        path: "/subjectsOption/add",
        element: (
          <Protected>
            <AddSubjects />
          </Protected>
        ),
      },
      {
        path: "/students",
        element: <StudentHomePage />,
      },
    ],
  },
  {
    path: "/schoolRegister",
    element: <SchoolsRegister />,
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
``;
export default App;
