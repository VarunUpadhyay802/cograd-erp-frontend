import { useState, useEffect } from "react";
import axios from "axios";
import ExpenseTable from "../../components/ExpenseTable";
import { Modal, Box } from "@mui/material";

const SchoolExpenses = () => {
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/transaction/", {
        withCredentials: true,
      });
      setTransactions(response.data.transactions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "http://localhost:4000/transaction/",
        {
          amount,
          description,
          receipt: receiptNumber,
          type: "expense",
        },
        { withCredentials: true }
      );
      setAmount("");
      setDescription("");
      setReceiptNumber("");
      fetchData();
      handleClose();
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <button
          onClick={handleOpen}
          className="flex gap-2 bg-[#AEE6E6] text-white px-4 py-2 rounded hover:bg-[#41C9E2] max-w-48"
        >
          <p className="text-black font-ProductTitle">Add Transaction </p>
          <img src="/add-transaction.png" alt="" className="h-6 w-6" />
        </button>
        <div>
          {transactions.length === 0 ? (
            <p>No transactions available</p>
          ) : (
            <ExpenseTable transactions={transactions} />
          )}
        </div>
        <Modal open={openModal} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              backgroundColor: "white",
              padding: 4,
              borderRadius: 2,
              boxShadow: 24,
            }}
          >
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-semibold mb-4">
                Add Transaction (Expense)
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="amount" className="block mb-1">
                    Amount:
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block mb-1">
                    Description:
                  </label>
                  <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="receiptNumber" className="block mb-1">
                    Receipt Number:
                  </label>
                  <input
                    type="text"
                    id="receiptNumber"
                    value={receiptNumber}
                    onChange={(e) => setReceiptNumber(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Add Transaction
                </button>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default SchoolExpenses;
