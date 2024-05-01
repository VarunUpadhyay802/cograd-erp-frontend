import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchTeachers } from "../utils/teacherSlice";

const TeacherAttendance = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.teachers);
  const isLoading = useSelector((state) => state.teachers.loading);
  const error = useSelector((state) => state.teachers.error);

  const [attendanceStatus, setAttendanceStatus] = useState([]);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  useEffect(() => {
    if (teachers.length === 0) {
      dispatch(fetchTeachers());
    } else {
      setAttendanceStatus(Array(teachers.length).fill("a"));
    }
  }, [dispatch, teachers]);

  const handleStatusChange = (index, value) => {
    const updatedStatus = [...attendanceStatus];
    updatedStatus[index] = value;
    setAttendanceStatus(updatedStatus);
  };
  const capitalizeFirstLetter = (str) => {
    if (!str) return ""; // Return empty string if str is undefined or null
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); // Capitalize first letter and keep rest lowercase
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const attendanceData = {
      statuses: attendanceStatus,
      date: currentDate,
    };

    try {
      await axios.post(
        "http://localhost:4000/teacherReg/mark",
        attendanceData,
        { withCredentials: true }
      );
      alert("Attendance recorded successfully!");
    } catch (error) {
      console.error("Error recording attendance:", error);
      alert("Error recording attendance");
    }
  };

  if (isLoading) {
    return <p>Loading teachers...</p>;
  }

  if (error) {
    return <p>Error fetching teachers: {error}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h2 className="text-xl font-semibold mb-4">Record Teacher Attendance</h2>

      <div className="flex flex-col items-center justify-center w-full max-w-7xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-center gap-4 ">
            {teachers.map((teacher, index) => (
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
                  {capitalizeFirstLetter(teacher.name)}{" "}
                  {/* Using the utility function */}
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className={`w-8 h-8 rounded-full ${
                      attendanceStatus[index] === "p"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleStatusChange(index, "p")}
                  >
                    P
                  </button>

                  <button
                    type="button"
                    className={`w-8 h-8 rounded-full ${
                      attendanceStatus[index] === "a"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleStatusChange(index, "a")}
                  >
                    A
                  </button>

                  <button
                    type="button"
                    className={` w-8 h-8 rounded-full ${
                      attendanceStatus[index] === "l"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleStatusChange(index, "l")}
                  >
                    L
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col xs:flex xs:flex-row gap-3 items-center justify-center mt-4">
            <input
              type="date"
              id="attendanceDate"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
              className=" p-1  border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="flex gap-2 bg-[#AEE6E6] text-white px-4 py-2 rounded hover:bg-[#41C9E2] max-w-lg"
            >
              <p className="text-black font-ProductTitle">Record Attendance</p>
              <img src="/schedule.png" alt="" className="h-7 w-7" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherAttendance;
