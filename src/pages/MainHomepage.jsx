import { jwtDecode } from "jwt-decode";
import SchoolHomePage from "./School/SchoolHomePage";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import StudentHomePage from "./Students/StudentHomePage";
import SingleStudentHomepage from "./Students/SingleStudent/SingleStudentHomepage";

const MainHomepage = () => {
  const [role, setRole] = useState("");
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setRole(decodedToken.role);
    }
  }, [token]);

  return (
    <div>
      {role && role === "PRINCIPAL" && <SchoolHomePage />}
      {role && role === "STUDENT" && <SingleStudentHomepage />}
    </div>
  );
};

export default MainHomepage;
