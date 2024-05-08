import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const DriverTable = ({ driverList }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Driver Name",
      width: 200,
    },
    {
      field: "busNumber",
      headerName: "Bus Number",
      width: 150,
    },
    {
      field: "pickUpPoints",
      headerName: "Pick-Up Points",
      width: 300,
      renderCell: (params) => (
        <div>
          {params.value.join(", ")} {/* Join the array into a string */}
        </div>
      ),
    },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      width: 180,
    },
  ];

  const rows = driverList.map((driver, index) => ({
    id: index + 1,
    name: driver.name,
    busNumber: driver.busNumber,
    pickUpPoints: driver.pickUpPoints,
    contactNumber: driver.contactNumber,
  }));

  return (
    <div className="dataGrid w-full">
      <Paper>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10, 20, 50]}
          disableRowSelectionOnClick
        />
      </Paper>
    </div>
  );
};

export default DriverTable;
