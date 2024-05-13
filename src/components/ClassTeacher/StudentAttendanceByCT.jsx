import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";

const StudentAttendanceByCT = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "studentName", headerName: "Student Name", width: 200 },
    {
      field: "attendance",
      headerName: "Attendance (Last 10 days)",
      width: 500,
      renderCell: (params) => {
        // Split the attendance string into an array of characters
        const attendanceArray = params.value.split("");
        return (
          <div className="flex gap-1">
            {attendanceArray.map((entry, index) => (
              <div key={index} className={getAttendanceCellStyle(entry)}>
                {entry}
              </div>
            ))}
          </div>
        );
      },
    },
  ];

  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/studentAttendance/getClassTeacherDetail",
          { withCredentials: true }
        );
        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }

        const dataWithIds = response.data.students.map((student, index) => ({
          ...student,
          id: index + 1,
        }));
        setStudents(dataWithIds);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getAttendanceCellStyle = (entry) => {
    switch (entry) {
      case "a":
        return "capitalize text-red-500";
      case "p":
        return "capitalize text-green-500";
      case "l":
        return "capitalize text-yellow-500";
      default:
        return "";
    }
  };

  return (
    <div className="dataGrid w-full">
      {isLoading ? (
        <p>Loading...</p>
      ) : students.length === 0 ? (
        <p>Please mark the attendance to see the table.</p>
      ) : (
        <DataGrid
          className="dataGrid_main p-4"
          rows={students}
          columns={columns}
          pageSize={10}
          components={{ Toolbar: GridToolbar }}
          disableSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
      )}
    </div>
  );
};

export default StudentAttendanceByCT;
