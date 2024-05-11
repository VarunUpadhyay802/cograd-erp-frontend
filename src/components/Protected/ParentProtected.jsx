/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function ParentProtected({ children }) {
  const isLoggedIn = () => {
    const token = Cookies.get("parentToken");
    console.log("parent token:", token);
    console.log(!!token);
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

export default ParentProtected;
