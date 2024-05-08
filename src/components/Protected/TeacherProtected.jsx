import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function TeacherProtected({ children }) {
  const isLoggedIn = () => {
    const token = Cookies.get("teacherToken");
    return !!token;
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  // If no token is valid, navigate to "/chooseUser"
  if (!isLoggedIn()) {
    return <Navigate to="/chooseUser" replace={true} />;
  }

  // Otherwise, return the protected content
  return children;
}

export default TeacherProtected;
