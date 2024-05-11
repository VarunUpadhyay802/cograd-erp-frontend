/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts";
import axios from "axios";

const TeacherAttendanceReport = ({ width, height }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const month = 5;
  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/teacherAttendance/calculate",
          { month },
          {
            withCredentials: true,
          }
        );
        const { data: attendanceData } = response.data;

        setData([
          { id: 0, value: attendanceData.presentCount, label: "Present" },
          { id: 1, value: attendanceData.absentCount, label: "Absent" },
          { id: 2, value: attendanceData.leaveCount, label: "Late" },
        ]);
      } catch (error) {
        setError("Error fetching attendance data");
        console.error("Error fetching attendance data:", error);
      }
    };

    fetchAttendanceData();
  }, [month]);

  return (
    <div className="flex w-full justify-center mb-4">
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <PieChart
          series={[
            {
              data,
            },
          ]}
          width={width}
          height={height}
          colors={["green", "red", "yellow"]}
          labelFormat={(params) => `${params.label}: ${params.value}`} // Customize label format
        />
      )}
    </div>
  );
};

export default TeacherAttendanceReport;
