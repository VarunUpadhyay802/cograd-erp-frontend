import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";

const TeacherAttendanceReportTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const columns = [
    { field: "date", headerName: "Date", width: 500 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        let statusText = "";
        switch (params.value) {
          case "p":
            statusText = "Present";

            break;
          case "a":
            statusText = "Absent";
            break;
          case "l":
            statusText = "Leave";
            break;
          default:
            statusText = "Unknown";
        }
        return <div>{statusText}</div>;
      },
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const response = await axios.get(
          "http://localhost:4000/teacherAttendance/get",
          {
            withCredentials: true,
          }
        );
        const { data } = response.data;
        setRows(
          data.map((record, index) => ({
            id: index, // use a unique identifier for rows
            date: record.date,
            status: record.status,
          }))
        );
      } catch (error) {
        console.error("Error fetching attendance data:", error);
        setError("Error fetching attendance data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dataGrid w-full">
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <DataGrid
          className="dataGrid_main p-4"
          rows={rows}
          columns={columns}
          loading={loading}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true, // Allow quick filtering
              quickFilterProps: { debounceMs: 500 }, // Debounce time for quick filtering
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
      )}
    </div>
  );
};

export default TeacherAttendanceReportTable;
