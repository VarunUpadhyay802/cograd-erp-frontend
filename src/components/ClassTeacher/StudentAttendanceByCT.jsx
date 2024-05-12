import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";

const StudentAttendanceByCT = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "studentName", headerName: "Student Name", width: 200 },
    { field: "attendance", headerName: "Attendance (Last 10 days)", width: 500 },
  ];

  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student attendance data from your API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/studentAttendance/getAttendanceByCT",
          { withCredentials: true }
        );
        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        // Generate unique IDs for each row
        const dataWithIds = response.data.students.map((student, index) => ({
          ...student,
          id: index + 1,
        }));
        setStudents(dataWithIds);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="dataGrid w-full">
      <DataGrid
        className="dataGrid_main p-4"
        rows={students}
        columns={columns}
        pageSize={10}
        components={{ Toolbar: GridToolbar }} // Use components prop instead of slots
        disableSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default StudentAttendanceByCT;
