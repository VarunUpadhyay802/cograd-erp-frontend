import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { clearUser } from "../utils/userSlice";
import { clearStudent } from "../utils/studentSlice";

function LogoutButton() {
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setRole(decodedToken.role);
    }
  }, [token]);

  const handleLogout = async () => {
    try {
      if (role === "PRINCIPAL") {
        const response = await axios.post(
          "http://localhost:4000/school/logout",
          {
            credentials: "include", // Include cookies in the request
          }
        );

        dispatch(clearUser());

        const data = await response.json();
        console.log("Logged out:", data.message);

        // Redirect to the login page after successful logout
        return <Navigate to={"/chooseUser"} replace={true}></Navigate>;
      } else if (role === "STUDENT") {
        const response = await axios.post(
          "http://localhost:4000/student/logout",
          {
            credentials: "include", // Include cookies in the request
          }
        );

        dispatch(clearStudent());

        const data = await response.json();
        console.log("Logged out:", data.message);

        // Redirect to the login page after successful logout
        return <Navigate to={"/chooseUser"} replace={true}></Navigate>;
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return <div onClick={handleLogout}></div>;
}

export default LogoutButton;
