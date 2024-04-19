import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import SchoolLogin from "./pages/SchoolLogin";
import SchoolRegister from "./pages/SchoolRegister";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<SchoolLogin />} />
        <Route path="/schoolRegister" element={<SchoolRegister />} />
        <Route path="/schoolLogin" element={<SchoolLogin />} />
      </Routes>
    </>
  );
}

export default App;
