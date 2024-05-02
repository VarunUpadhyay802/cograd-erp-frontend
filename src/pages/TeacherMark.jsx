import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

const TeacherMark = () => {
  const [currentDate, setCurrentDate] = useState(dayjs().format("YYYY-MM-DD")); // Default to today's date
  const [status, setStatus] = useState("a"); // Default status "a" (absent)
  const [message, setMessage] = useState(""); // Success or error message

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus); // Update the attendance status
  };

  const handleDateChange = (e) => {
    setCurrentDate(e.target.value); // Update the selected date
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const attendanceData = {
      date: currentDate,
      status, // Attendance status ("p", "a", "l")
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/teacherAttendance/markSelf",
        attendanceData,
        { withCredentials: true } // Include authentication cookies
      );

      if (response.status === 201) {
        setMessage("Attendance marked successfully!");
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message; // Get the error message from the response
      if (errorMessage === `Attendance already marked for ${currentDate}`) {
        setMessage(`Attendance already marked for ${currentDate}`);
      } else {
        setMessage("Error marking attendance");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Mark Your Attendance</h2>

      <div className="flex flex-col items-center justify-center w-full max-w-7xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-4 bg-white p-4 border border-gray-300 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Select Attendance Status</p>
            
            <div className="flex gap-3">
              <button
                type="button"
                className={`w-8 h-8 rounded-full ${
                  status === "p" ? "bg-green-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => handleStatusChange("p")}
              >
                P
              </button>
              <button
                type="button"
                className={`w-8 h-8 rounded-full ${
                  status === "a" ? "bg-red-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => handleStatusChange("a")}
              >
                A
              </button>
              <button
                type="button"
                className={`w-8 h-8 rounded-full ${
                  status === "l" ? "bg-orange-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => handleStatusChange("l")}
              >
                L
              </button>
            </div>
            
            <input
              type="date"
              value={currentDate}
              onChange={handleDateChange}
              className="mt-4 p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Mark Attendance
            </button>
          </div>
        </form>

        {message && <p className="mt-4 text-lg">{message}</p>} {/* Display success/error message */}
      </div>
    </div>
  );
};

export default TeacherMark;
