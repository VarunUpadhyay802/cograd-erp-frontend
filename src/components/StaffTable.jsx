import React from "react";
import { DataGrid } from "@mui/x-data-grid"; // DataGrid from MUI for table representation
import Paper from "@mui/material/Paper"; // Paper for wrapping the grid

const StaffTable = ({ staffMemberList }) => {
  // Define the columns with an additional "Photo" field
  const columns = [
    { field: "id", headerName: "ID", width: 90 }, // Unique ID for each staff member
    {
      field: "photo",
      headerName: "Profile",
      width: 150, // Column width for the photo
      renderCell: (params) => (
        <div>
           <img src="/public/team.png" alt="" className="h-8 w-8" />
          {/* Add styling to make it rounded */}
        </div>
      ),
    },
    {
      field: "name",
      headerName: "Staff Name",
      width: 220, // The name of the staff member
    },
    {
      field: "post",
      headerName: "Post",
      width: 180, // The staff member's post/position
    },
    {
      field: "salary",
      headerName: "Salary",
      type: "number",
      align: "right", // Aligning salary values to the right
      width: 150, // The salary of the staff member
    },
  ];

  // Ensure that each staff member has a photo property
  const rows = staffMemberList.map((staff, index) => ({
    id: index + 1,
    photo: staff.photo, // Photo of the staff member
    name: staff.name,
    post: staff.post,
    salary: staff.salary,
  })); // Converting the list to a format DataGrid can use

  return (
    <div className="dataGrid w-full bg-white">
      <Paper>
        <DataGrid
          className="dataGrid_main p-4"
          rows={rows} // Staff data
          columns={columns} // Defined columns with the additional photo column
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10, // Default page size
              },
            },
          }}
          pageSizeOptions={[10, 20, 50]} // Allowable page sizes
          checkboxSelection // If row selection is required
          disableRowSelectionOnClick // Prevent row selection on cell click
        />
      </Paper>
    </div>
  );
};

export default StaffTable;
