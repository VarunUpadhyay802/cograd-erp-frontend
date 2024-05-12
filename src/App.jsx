import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import SchoolLogin from "./pages/School/SchoolLogin";
import SchoolExpenses from "./pages/School/SchoolExpenses";
import SchoolStaff from "./pages/School/SchoolStaff";
import SchoolAddClasses from "./pages/School/SchoolAddClasses";
import AddSubjects from "./pages/AddSubjects";
import HomePage from "./pages/HomePage";
import TeacherAttendance from "./pages/Teacher/TeacherAttendance";
import TeacherList from "./pages/TeacherList";
import Protected from "./components/Protected/Protected";
import ChooseUser from "./pages/ChooseUser";
import TeacherLogin from "./pages/Teacher/TeacherLogin";
import TeacherOptions from "./pages/Teacher/TeacherOptions";
import TeacherRegistration from "./pages/Teacher/TeacherRegistration";

import TeacherMark from "./pages/TeacherMark";

import ClassTeacherRegistration from "./pages/ClassTeacherRegistration";
import SubjectOptions from "./pages/SubjectOptions";

import ViewTeacherAttendance from "./pages/ViewTeacherAttendance";
import TeacherIndividualAttendance from "./pages/TeacherIndividualAttendance";

import ClassTeacherLogin from "./pages/ClassTeacherLogin";

import StudentAttendance from "./pages/StudentAttendance";
import StudentRegistrationPage from "./pages/Students/StudentRegistrationPage";
import StudentHomePage from "./pages/Students/StudentHomePage";
import StudentHomePage2 from "./pages/Students/StudentHomePage2";
import ViewSubjects from "./pages/ViewSubjects";
import SchoolsRegister from "./pages/School/SchoolsRegister";
// import SchoolHomePage from "./pages/School/SchoolHomePage";
import StudentLogin from "./pages/Students/SingleStudent/StudentLogin";
import MainHomepage from "./pages/MainHomepage";
// import AttendanceReport from "./components/Students/SingleStudent/AttendanceReport";
import StudentAttendanceReport from "./pages/Students/SingleStudent/StudentAttendanceReport";
import MarksSheetPage from "./pages/Students/SingleStudent/MarksSheetPage";
import ComplainPage from "./pages/Students/SingleStudent/ComplainPage";
import ParentLogin from "./pages/Parent/ParentLogin";
import ParentRegistration from "./pages/Parent/ParentRegistration";
import ClassTeacherHomePage from "./components/ClassTeacher/ClassTeacherHomePage";
import TeacherHomePage from "./pages/Teacher/TeacherHomePage";
import ParentHomePage from "./pages/Parent/ParentHomePage";
import TeacherAttendanceData from "./components/Teachers/TeacherAttendanceData";
import TeacherOptionsIndividual from "./pages/Teacher/TeacherOptionsIndividual";
import ParentProtected from "./components/Protected/ParentProtected";
import ProtectedAll from "./components/Protected/ProtectedAll";
import SchoolDriver from "./components/Driver/SchoolDriver";
import Extra from "./pages/Extra";
import ParentChildPage from "./pages/Parent/ParentChildPage";
import StudentProtected from "./components/Protected/StudentProtected";
import ParentFeeStructure from "./pages/Parent/ParentFeeStructure";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminProtected from "./components/Protected/AdminProtected";
import AdminHomePage from "./pages/Admin/AdminHomePage";
import SchoolRegistration from "./pages/School/SchoolRegistration";
import ClassTeacherProtected from "./components/Protected/ClassTeacherProtected";
import ClassTeacherAttendanceOptions from "./pages/Class-Teacher/ClassTeacherAttendanceOptions";
import StudentAttendanceByCT from "./components/ClassTeacher/StudentAttendanceByCT";
// import TeacherMenuList from "./components/Teachers/TeacherMenuList";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedAll>
        <HomePage />
      </ProtectedAll>
    ),
    children: [
      {
        path: "/",
        element: (
          <ProtectedAll>
            <MainHomepage />
          </ProtectedAll>
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
        path: "/driver",
        element: (
          <Protected>
            <SchoolDriver />
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
        path: "/extra",
        element: (
          <Protected>
            <Extra />
          </Protected>
        ),
      },
      {
        path: "/students",
        element: (
          <StudentProtected>
            <StudentHomePage />
          </StudentProtected>
        ),
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
      {
        path: "/classteacher-att",
        element: (
          <ClassTeacherProtected>
            <ClassTeacherAttendanceOptions />,
          </ClassTeacherProtected>
        ),
      },
      {
        path: "/student-mark",
        element: (
          <ClassTeacherProtected>
            <StudentAttendance />,
          </ClassTeacherProtected>
        ),
      },
      {
        path: "/student-mark-see",
        element: (
          <ClassTeacherProtected>
            <StudentAttendanceByCT />,
          </ClassTeacherProtected>
        ),
      },

      {
        path: "/classTeacherHomePage",
        element: <ClassTeacherHomePage />,
      },
      {
        path: "/teacherHomePage",
        element: <TeacherHomePage />,
      },

      {
        path: "/teacher-attendance-option",
        element: <TeacherOptionsIndividual />,
      },
      //teacher mark their own attendance
      {
        path: "/teacher-mark-self",
        element: <TeacherMark />,
      },

      {
        path: "/teacher-mark-see",
        element: <TeacherAttendanceData />,
      },
      {
        path: "/admin",
        element: (
          <AdminProtected>
            <AdminHomePage />
          </AdminProtected>
        ),
      },
      {
        path: "/parentHomePage",
        element: (
          <ParentProtected>
            <ParentHomePage />
          </ParentProtected>
        ),
      },
      {
        path: "/feeStructure",
        element: (
          <ParentProtected>
            <ParentFeeStructure />
          </ParentProtected>
        ),
      },
      {
        path: "/parentChild",
        element: (
          <ParentProtected>
            <ParentChildPage />
          </ParentProtected>
        ),
      },
      {
        path: "/schoolRegistration",
        element: (
          <AdminProtected>
            <SchoolRegistration />
          </AdminProtected>
        ),
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
    path: "/adminLogin",
    element: <AdminLogin />,
  },

  {
    path: "/classTeacherRegistration/:teacherId",
    element: <ClassTeacherRegistration />,
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
