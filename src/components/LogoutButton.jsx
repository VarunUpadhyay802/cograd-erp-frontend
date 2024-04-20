    import React from "react";
    import { useNavigate } from "react-router-dom";

    function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
        const response = await fetch("http://localhost:4000/school/logout", {
            method: "POST",
            credentials: "include", // Include cookies in the request
        });

        const data = await response.json();
        console.log("Logged out:", data.message);

        // Redirect to the login page after successful logout
        // navigate("/schoolLogin");
        } catch (error) {
        console.error("Error logging out:", error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
    }

    export default LogoutButton;
