import { useState, useEffect } from "react";
import axios from "axios";

const StudentAttendance = () => {
  const [students, setStudents] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState([]);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  // Fetch the list of students
  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/studentAttendance/studentsList",
        {
          withCredentials: true,
        }
      );
      setStudents(response.data.students);
      setAttendanceStatus(Array(response.data.students.length).fill("a"));
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Fetch consecutive absences and handle notifications
  const checkConsecutiveAbsences = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/studentAttendance/checkConsecutiveAbsences",
        { withCredentials: true }
      );

      if (response.data?.message === "Consecutive absences checked.") {
        console.log("Consecutive absence check complete");
        // You can add a UI indication here, like a toast message or a pop-up
      }
    } catch (error) {
      console.error("Error checking consecutive absences:", error);
    }
  };

  useEffect(() => {
    checkConsecutiveAbsences(); // Check when the component mounts
  }, []);

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

      const response = await axios.post(
        "http://localhost:4000/studentAttendance/mark",
        attendanceData,
        {
          withCredentials: true,
        }
      );

      // After marking attendance, check for consecutive absences again
      checkConsecutiveAbsences(); // Trigger the check on submit

      alert("Attendance recorded successfully!");
    } catch (error) {
      console.error("Error recording attendance:", error);
      alert("Error recording attendance");
    }
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Record Student Attendance</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-7xl">
        <div className="flex flex-wrap justify-center gap-4">
          {students.map((student, index) => (
            <div
              key={student._id}
              className="gap-2 px-4 py-3 border border-gray-300 rounded-lg flex flex-col items-center justify-between bg-white"
            >
              <img
                src="/student.png"
                alt="Student"
                className="h-16 w-18 rounded-full bg-slate-200"
              />
              <p className="font-serif font-medium">
                {capitalizeFirstLetter(student.name)}
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
                  className={`w-8 h-8 rounded-full ${
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
            className="p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="flex gap-2 bg-[#AEE6E6] text-white px-4 py-2 rounded hover:bg-[#41C9E2]"
          >
            Record Attendance
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentAttendance;
