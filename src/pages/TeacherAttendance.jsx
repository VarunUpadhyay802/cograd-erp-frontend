import { useState, useEffect } from "react";
import axios from "axios";

const TeacherAttendance = () => {
  const [teachers, setTeachers] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState([]);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10)
  ); // ISO date format

  // Fetch teachers on component mount
  const fetchTeachers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/teacherReg/get",
        {
          withCredentials: true,
        }
      );
      setTeachers(response.data);
      console.log(response.data);
      // Initialize attendance status array with default "a" (absent)
      setAttendanceStatus(Array(response.data.length).fill("a"));
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleStatusChange = (index, value) => {
    // Update the attendance status for a specific teacher
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
        "http://localhost:4000/teacherReg/mark",
        attendanceData,
        { withCredentials: true }
      );
      console.log("Teacher Attendances success:", response.data);
      alert("Attendance recorded successfully!");
    } catch (error) {
      console.error("Error recording attendance:", error);
      alert("Error recording attendance");
    }
  };

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
