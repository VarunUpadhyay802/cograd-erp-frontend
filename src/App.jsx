import { Route, Routes } from "react-router-dom";
import "./App.css";
// import HomePage from "./HomePage";
import SchoolLogin from "./pages/SchoolLogin";
import SchoolRegister from "./pages/SchoolRegister";
import SchoolHomePage from "./pages/SchoolHomePage";
import SchoolExpenses from "./pages/SchoolExpenses";

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
      </Routes>
    </>
  );
}

export default App;
