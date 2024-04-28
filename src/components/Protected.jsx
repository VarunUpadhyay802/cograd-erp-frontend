import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

function Protected({ children }) {
  const isLoggedIn = () => {
    const token = Cookies.get("token");
    console.log(!!token);

    return !!token;
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  if (!isLoggedIn()) {
    return <Navigate to="/chooseUser" replace={true}></Navigate>;
  }

  //   if (userRole && userRole !== "PRINCIPAL") {
  //     return <Navigate to="/" replace={true}></Navigate>;
  //   }
  return children;
}

export default Protected;
