import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./Student.css";

const StudentLists = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "profile",
      headerName: "Profile",
      width: 150,
      renderCell: (params) => (
        <div>
          <img src="/graduated.png" alt="" className="h-8 w-8 rounded-full" />
        </div>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 220,
      renderCell: (params) => <div className="name-column">{params.value}</div>,
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
    },
    {
      field: "time",
      headerName: "Avg Time (hrs)",
      width: 150,
    },
  ];

  const rows = [
    { id: 1, name: "Amit Sharma", email: "amit@cograd.in", time: 1.5 },
    {
      id: 2,
      name: "Sita Gupta",
      email: "sita@cograd.in",
      time: 1.25,
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      email: "rajesh@cograd.in",
      time: 1.75,
    },
    { id: 4, name: "Priya Singh", email: "priya@cograd.in", time: 0.5 },
    {
      id: 5,
      name: "Vikram Patel",
      email: "vikram@cograd.in",
      time: 2,
    },
    { id: 6, name: "Neha Mehra", email: "neha@cograd.in", time: 2 },
    {
      id: 7,
      name: "Sanjay Verma",
      email: "sanjay@cograd.in",
      time: 1.75,
    },
    {
      id: 8,
      name: "Sunita Reddy",
      email: "sunita@cograd.in",
      time: 1.5,
    },
    { id: 9, name: "Ravi Deshmukh", email: "ravi@cograd.in", time: 2 },
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
        pageSizeOptions={[10]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true, // Allow quick filtering
            quickFilterProps: { debounceMs: 500 }, // Debounce time for quick filtering
          },
        }}
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default StudentLists;
