import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";

const AttendanceReportTable = () => {
  const columns = [
    { field: "date", headerName: "Date", width: 500 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <div>{params.value === "p" ? "Present" : "Absent"}</div>
      ),
    },
  ];

  const rows = [
    { id: 1, date: "01-04-2024", status: "p" },
    { id: 2, date: "02-04-2024", status: "a" },
    { id: 3, date: "03-04-2024", status: "p" },
    { id: 4, date: "04-04-2024", status: "p" },
    { id: 5, date: "05-04-2024", status: "p" },
    { id: 6, date: "06-04-2024", status: "p" },
    { id: 7, date: "07-04-2024", status: "p" },
    { id: 8, date: "08-04-2024", status: "p" },
    { id: 9, date: "09-04-2024", status: "p" },
    { id: 10, date: "10-04-2024", status: "p" },
    { id: 11, date: "11-04-2024", status: "a" },
  ];

  return (
    <div className="dataGrid w-full">
      <DataGrid
        className="dataGrid_main p-4"
        rows={rows}
        columns={columns}
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
    </div>
  );
};

export default AttendanceReportTable;
