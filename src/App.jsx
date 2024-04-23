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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/schoolRegister",
        element: <SchoolRegister />,
      },
      {
        path: "/schoolLogin",
        element: <SchoolLogin />,
      },
      {
        path: "/school",
        element: <SchoolHomePage />,
      },
      {
        path: "/expenses",
        element: <SchoolExpenses />,
      },
      {
        path: "/staffs",
        element: <SchoolStaff />,
      },
      {
        path: "/subjects",
        element: <AddSubjects />,
      },
      {
        path: "/classes",
        element: <SchoolAddClasses />,
      },
      {
        path: "/teacherAttendance",
        element: <TeacherAttendance />,
      },
      {
        path: "/schoolLogin",
        element: <SchoolLogin />,
      },
    ],
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
