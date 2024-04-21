
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

// eslint-disable-next-line react/prop-types
const ExpenseTable = ({ transactions }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'amount', headerName: 'Amount', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'date', headerName: 'Date', width: 200 },
  ];

  // Map transactions data to rows
  // eslint-disable-next-line react/prop-types
  const rows = transactions.map((transaction, index) => ({
    id: index + 1, // Generate unique IDs for rows
    amount: transaction.amount,
    description: transaction.description,
    date: new Date(transaction.date).toLocaleDateString(), // Convert date to human-readable format
  }));

  return (
    <div className="dataTable w-full">
      {rows.length > 0 ? (
        <DataGrid
          className="dataGrid w-full overflow-x-auto"
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
      ) : (
        <div className="no-data">No transactions available</div>
      )}
    </div>
  );
};

export default ExpenseTable;
