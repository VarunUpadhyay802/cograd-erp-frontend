import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ClassTeacherRegistration = () => {
  const { teacherId } = useParams(); // Extract the teacher ID from the URL parameters
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [className, setClassName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/classTeacher/register",
        {
          email,
          password,
          className,
          teacherId, // Include the teacher ID from the URL parameter
        },
        { withCredentials: true }
      );

      alert("Class Teacher registered successfully");
      navigate("/"); // Redirect to a different page after successful registration
    } catch (error) {
      console.error("Error registering class teacher:", error);
      alert("Failed to register class teacher");
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Register Class Teacher</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="className" className="block mb-1">
            Class Name:
          </label>
          <input
            type="text"
            id="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Register Class Teacher
        </button>
      </form>
    </div>
  );
};

export default ClassTeacherRegistration;
