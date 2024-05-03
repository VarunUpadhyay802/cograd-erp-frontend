import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchTeachers } from "../utils/teacherSlice";

const TeacherIndividualAttendance = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.teachers);
  const isLoading = useSelector((state) => state.teachers.loading);
  const error = useSelector((state) => state.teachers.error);

  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [attendanceError, setAttendanceError] = useState(""); // New state variable for error messages

  useEffect(() => {
    if (teachers.length === 0) {
      dispatch(fetchTeachers());
    }
  }, [dispatch, teachers]);

  const handleStatusChange = async (teacherId, status) => {
    setAttendanceError(""); // Reset error message

    const attendanceData = {
      teacherId,
      date: currentDate,
      status,
    };

    try {
      await axios.post(
        "http://localhost:4000/teacherReg/editAttendance",
        attendanceData,
        {
          withCredentials: true,
        }
      );
      alert(`Attendance recorded: ${status.toUpperCase()}`);
    } catch (error) {
      console.error("Error updating attendance:", error);

      // Extract error message if available
      const errorMessage =
        error.response?.data?.message || "Error updating attendance";
      setAttendanceError(errorMessage); // Store error message in state
    }
  };

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  if (isLoading) {
    return <p>Loading teachers...</p>;
  }

  if (error) {
    return <p>Error fetching teachers: {error}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-semibold mb-4">
        Record Individual Teacher Attendance
      </h2>

      {attendanceError && ( // Display error message if it's set
        <p className="text-red-500 mb-4">{attendanceError}</p>
      )}

      <div className="flex flex-wrap justify-center gap-4">
        {teachers.map((teacher) => (
          <div
            key={teacher._id}
            className="gap-2 px-4 py-3 border border-gray-300 rounded-lg flex flex-col items-center justify-between bg-white"
          >
            <img
              src="/teacher-2.png"
              alt=""
              className="h-16 w-18 rounded-full bg-slate-200"
            />
            <p className="font-serif font-medium">
              {capitalizeFirstLetter(teacher.name)}
            </p>
            <div className="flex gap-3">
              <button
                className="w-8 h-8 rounded-full bg-green-500 text-white"
                onClick={() => handleStatusChange(teacher._id, "p")}
              >
                P
              </button>
              <button
                className="w-8 h-8 rounded-full bg-red-500 text-white"
                onClick={() => handleStatusChange(teacher._id, "a")}
              >
                A
              </button>
              <button
                className="w-8 h-8 rounded-full bg-orange-500 text-white"
                onClick={() => handleStatusChange(teacher._id, "l")}
              >
                L
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherIndividualAttendance;
