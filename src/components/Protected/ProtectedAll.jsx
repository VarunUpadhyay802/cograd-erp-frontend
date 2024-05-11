import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedAll({ children }) {
  const isAnyTokenValid = () => {
    const schoolToken = Cookies.get("token"); // For principal
    const studentToken = Cookies.get("studentToken"); // For student
    const teacherToken = Cookies.get("teacherToken"); // For teacher
    const classTeacherToken = Cookies.get("classTeacherToken"); // For class teacher
    const ParentToken = Cookies.get("parentToken");
    const adminToken = Cookies.get("adminToken");
    // If any of these tokens are valid, return true
    return !!(
      schoolToken ||
      studentToken ||
      teacherToken ||
      classTeacherToken ||
      ParentToken||
      adminToken
    );
  };

  useEffect(() => {
    console.log("Is any token valid:", isAnyTokenValid());
  }, []);

  // If no token is valid, navigate to "/chooseUser"
  if (!isAnyTokenValid()) {
    return <Navigate to="/chooseUser" replace={true} />;
  }

  // Otherwise, return the protected content
  return children;
}

export default ProtectedAll;
