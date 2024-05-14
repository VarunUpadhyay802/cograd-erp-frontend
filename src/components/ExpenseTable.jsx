import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid"; // DataGrid and toolbar for table representation
import Paper from "@mui/material/Paper"; // Paper for wrapping the grid
import PaymentsIcon from "@mui/icons-material/Payments";
const ExpenseTable = ({ transactions }) => {
  // Define the columns with an additional "Profile" field
  const columns = [
    { field: "id", headerName: "ID", width: 90 }, // Unique ID for each transaction
    {
      field: "profile",
      headerName: "Profile",
      width: 150, // Width for the profile column
      renderCell: (params) => (
        <div>
          {/* Placeholder image for profile */}
          <img src="/budget.png" alt="" className="h-7 w-8 " />
        </div>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
    },
    { field: "description", headerName: "Description", width: 200 },
    { field: "amount", headerName: "Amount", width: 150, type: "number" },
 
    { field: "receiptNumber", headerName: "Receipt No.", width: 150 },
   
  ];

  // Ensure the rows align with the data grid's structure
  const rows = transactions.map((transaction, index) => ({
    id: index + 1, // Unique ID for the transaction
    profile: "/default-profile.png", // Default profile image
    amount: transaction.amount,
    description: transaction.description,
    receiptNumber: transaction.receipt,
    date: new Date(transaction.date).toLocaleDateString(),
  }));

  return (
    <div className="dataGrid w-full">
      <Paper>
        <DataGrid
          className="dataGrid_main p-4"
          rows={rows} // Expense data
          columns={columns} // Defined columns with the profile column
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10, // Default page size
              },
            },
          }}
          pageSizeOptions={[10, 20, 50]} // Allowable page sizes
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true, // Allow quick filtering
              quickFilterProps: { debounceMs: 500 }, // Debounce time for quick filtering
            },
          }}
          disableRowSelectionOnClick // Prevent row selection on click
          disableColumnSelector // Disable column selection if not needed
        />
      </Paper>
    </div>
  );
};

export default ExpenseTable;
