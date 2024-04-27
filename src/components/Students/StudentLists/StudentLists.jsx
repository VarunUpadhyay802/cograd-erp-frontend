import React from "react";
import { DataGrid } from "@mui/x-data-grid";
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
    { id: 1, name: "Jon Snow", email: "jon@example.com", time: 1.5 },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cersei@example.com",
      time: 1.25,
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaime@example.com",
      time: 1.75,
    },
    { id: 4, name: "Arya Stark", email: "arya@example.com", time: 0.5 },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerys@example.com",
      time: 2,
    },
    { id: 6, name: "Melisandre", email: "melisandre@example.com", time: 2 },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferrara@example.com",
      time: 1.75,
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossini@example.com",
      time: 1.5,
    },
    { id: 9, name: "Harvey Roxie", email: "harvey@example.com", time: 2 },
  ];

  return (
    <div className="dataGrid w-full bg-white">
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
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default StudentLists;
