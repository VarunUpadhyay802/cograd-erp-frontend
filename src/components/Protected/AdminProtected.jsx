/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function AdminProtected({ children }) {
  const isLoggedIn = () => {
    const token = Cookies.get("adminToken");
    return !!token;
  };

  useEffect(() => {
    isLoggedIn();
    console.log("Is Admin logged in:", isLoggedIn());
  }, []);

  if (!isLoggedIn()) {
    return <Navigate to="/chooseUser" replace={true} />;
  }

  // Otherwise, return the protected content
  return children;
}

export default AdminProtected;
