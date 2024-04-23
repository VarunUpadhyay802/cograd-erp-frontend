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
        path: "/teacherAttendance",
        element: (
          <Protected>
            <TeacherAttendance />
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
