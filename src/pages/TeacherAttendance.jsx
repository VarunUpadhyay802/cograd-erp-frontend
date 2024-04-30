import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { fetchTeachers } from "../utils/teacherSlice";
import axios from "axios";

const TeacherAttendance = () => {
  const dispatch = useDispatch();

  const teachers = useSelector((state) => state.teachers.teachers);
  const isLoading = useSelector((state) => state.teachers.loading);
  const error = useSelector((state) => state.teachers.error);

  const [attendanceStatus, setAttendanceStatus] = useState([]);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10) // ISO date format
  );

  useEffect(() => {
    if (teachers.length === 0) {
      dispatch(fetchTeachers()); // Fetch only if it's not already in Redux
    } else {
      // If teachers are already in Redux, initialize attendance status
      setAttendanceStatus(Array(teachers.length).fill("a"));
    }
  }, [dispatch, teachers]);

  const handleStatusChange = (index, value) => {
    const updatedStatus = [...attendanceStatus];
    updatedStatus[index] = value;
    setAttendanceStatus(updatedStatus);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const attendanceData = {
        statuses: attendanceStatus,
        date: currentDate,
      };

      await axios.post(
        "http://localhost:4000/teacherReg/mark",
        attendanceData,
        { withCredentials: true }
      );

      alert("Attendance recorded successfully!");
    } catch (error) {
      alert("Error recording attendance");
      console.error("Error:", error);
    }
  };

  if (isLoading) {
    return <p>Loading teachers...</p>;
  }

  if (error) {
    return <p>Error fetching teachers: {error}</p>;
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Record Teacher Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="attendanceDate" className="block mb-1">
            Attendance Date:
          </label>
          <input
            type="date"
            id="attendanceDate"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {teachers.map((teacher, index) => (
          <div key={teacher._id} className="mb-4">
            <label className="block mb-1">
              {teacher.name} - Attendance Status:
            </label>
            <select
              value={attendanceStatus[index]}
              onChange={(e) => handleStatusChange(index, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="p">Present</option>
              <option value="a">Absent</option>
            </select>
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Record Attendance
        </button>
      </form>
    </div>
  );
};

export default TeacherAttendance;
