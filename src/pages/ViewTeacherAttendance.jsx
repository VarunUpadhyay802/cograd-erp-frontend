import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid"; // DataGrid for table representation
import Paper from "@mui/material/Paper"; // Paper for wrapping the grid
import dayjs from "dayjs"; // Using dayjs for date manipulation and formatting

const ViewTeacherAttendance = () => {
  const [attendanceList, setAttendanceList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data function
  const fetchAttendanceData = async (date) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/teacherReg/getAllByDate",
        {
          date, // Example date parameter
        },
        {
          withCredentials: true, // Include authentication cookies
        }
      );
      setAttendanceList(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching attendance data:", err);
      setError("Failed to fetch attendance data.");
      setLoading(false);
    }
  };

  // Fetch attendance data on component mount
  useEffect(() => {
    const today = dayjs().format("YYYY-MM-DD"); // Get today's date in YYYY-MM-DD format
    fetchAttendanceData(today); // Use today's date to fetch attendance data
  }, []); // This runs once on component mount

  // Define the columns for the DataGrid
  const columns = [
    { field: "id", headerName: "ID", width: 90 }, // Unique ID for each staff member
    {
      field: "photo",
      headerName: "Profile",
      width: 130, // Column width for the photo
      renderCell: (params) => (
        <div>
          <img src="/teacher-2.png" alt="" className="h-8 w-8" />
          {/* Add styling to make it rounded */}
        </div>
      ),
    },
    { field: "teacher", headerName: "Teacher", width: 100 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
  ];

  // Define rows for the DataGrid from the attendanceList
  const rows = attendanceList.map((attendance, index) => ({
    id: index + 1,

    photo: attendance.photo,
    teacher: attendance.teacher.name,
    status: attendance.status,
    date: attendance.date,
  }));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="dataGrid w-full">
      <Paper>
        <DataGrid
          className="dataGrid_main p-4"
          rows={rows} // Attendance data
          columns={columns} // Defined columns
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10, // Default page size
              },
            },
          }}
          pageSizeOptions={[10, 20, 50]} // Allowable page sizes
          disableRowSelectionOnClick // Prevent row selection on cell click
        />
      </Paper>
    </div>
  );
};

export default ViewTeacherAttendance;
