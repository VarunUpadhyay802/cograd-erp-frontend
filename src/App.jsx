import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import SchoolLogin from "./pages/School/SchoolLogin";
import SchoolExpenses from "./pages/School/SchoolExpenses";
import SchoolStaff from "./pages/School/SchoolStaff";
import SchoolAddClasses from "./pages/School/SchoolAddClasses";
import AddSubjects from "./pages/AddSubjects";
import HomePage from "./pages/HomePage";
import TeacherAttendance from "./pages/TeacherAttendance";
import TeacherList from "./pages/TeacherList";
import Protected from "./components/Protected";
import ChooseUser from "./pages/ChooseUser";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherOptions from "./pages/TeacherOptions";
import TeacherRegistration from "./pages/TeacherRegistration";
import TeacherDashBoard from "./pages/TeacherDashBoard";
import TeacherMark from "./pages/TeacherMark";

import ClassTeacherRegistration from "./pages/ClassTeacherRegistration";
import SubjectOptions from "./pages/SubjectOptions";
import ClassTeacherDashBoard from "./pages/ClassTeacherDashBoard";
import ViewTeacherAttendance from "./pages/ViewTeacherAttendance";

import TeacherIndividualAttendance from "./pages/TeacherIndividualAttendance";

import ClassTeacherLogin from "./pages/ClassTeacherLogin";

import StudentAttendance from "./pages/StudentAttendance";
import StudentRegistrationPage from "./pages/Students/StudentRegistrationPage";
import StudentHomePage from "./pages/Students/StudentHomePage";
import StudentHomePage2 from "./pages/Students/StudentHomePage2";
import ViewSubjects from "./pages/ViewSubjects";
import SchoolsRegister from "./pages/School/SchoolsRegister";
import SchoolHomePage from "./pages/School/SchoolHomePage";
import StudentLogin from "./pages/Students/SingleStudent/StudentLogin";
import MainHomepage from "./pages/MainHomepage";
// import AttendanceReport from "./components/Students/SingleStudent/AttendanceReport";
import StudentAttendanceReport from "./pages/Students/SingleStudent/StudentAttendanceReport";
import MarksSheetPage from "./pages/Students/SingleStudent/MarksSheetPage";
import ComplainPage from "./pages/Students/SingleStudent/ComplainPage";
import ParentLogin from "./pages/Parent/ParentLogin";
import ParentRegistration from "./pages/Parent/ParentRegistration";
// import TeacherMenuList from "./components/Teachers/TeacherMenuList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <MainHomepage />,
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
        path: "/view/teacherAttendance",
        element: (
          <Protected>
            <ViewTeacherAttendance />
          </Protected>
        ),
      },
      {
        path: "/teacherList",
        element: (
          <Protected>
            <TeacherList />
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
        path: "/teacher-all-Attendance",
        element: (
          <Protected>
            <TeacherAttendance />
          </Protected>
        ),
      },
      {
        path: "/teacher-individual-attendance",
        element: (
          <Protected>
            <TeacherIndividualAttendance />
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
        path: "/parentRegistration",
        element: (
          <Protected>
            <ParentRegistration />
          </Protected>
        ),
      },
      {
        path: "/students",
        element: <StudentHomePage />,
      },
      {
        path: "/students-2",
        element: <StudentHomePage2 />,
      },
      {
        path: "/studentAttendance",
        element: <StudentAttendanceReport />,
      },
      {
        path: "/marks",
        element: <MarksSheetPage />,
      },
      {
        path: "/studentComplains",
        element: <ComplainPage />,
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
    path: "/studentLogin",
    element: <StudentLogin />,
  },
  {
    path: "/parentLogin",
    element: <ParentLogin />,
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
    path: "/teacher-mark-self",
    element: <TeacherMark />,
  },
  {
    path: "/student-mark",
    element: <StudentAttendance />,
  },
  {
    path: "/student-mark",
    element: <StudentAttendance />,
  },
  //teacher taking attendance of himself
  {
    path: "/teacher-mark",
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
