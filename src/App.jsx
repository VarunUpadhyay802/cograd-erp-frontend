import { Route, Routes } from "react-router-dom";
import "./App.css";
// import HomePage from "./HomePage";
import SchoolLogin from "./pages/SchoolLogin";
import SchoolRegister from "./pages/SchoolRegister";
import SchoolHomePage from "./pages/SchoolHomePage";
import SchoolExpenses from "./pages/SchoolExpenses";
import SchoolStaff from "./pages/SchoolStaff";
import SchoolAddClasses from "./pages/SchoolAddClasses";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<SchoolLogin />} />
        <Route path="/schoolRegister" element={<SchoolRegister />} />
        <Route path="/schoolLogin" element={<SchoolLogin />} />
        <Route path="/school" element={<SchoolHomePage />} />
        <Route path="/expenses" element={<SchoolExpenses />} />
        <Route path="/staff" element={<SchoolStaff />} />
        <Route path="/class" element={<SchoolAddClasses />} />
      </Routes>
    </>
  );
}

export default App;
