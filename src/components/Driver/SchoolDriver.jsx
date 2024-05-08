import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Box } from "@mui/material";
import DriverTable from "./DriverTable";

const SchoolDriver = () => {
  const [driverName, setDriverName] = useState(""); // Driver's name
  const [busNumber, setBusNumber] = useState(""); // Driver's bus number
  const [pickUpPoints, setPickUpPoints] = useState([]); // Driver's pick-up points
  const [contactNumber, setContactNumber] = useState(""); // Driver's contact number
  const [driverList, setDriverList] = useState([]); // List of drivers
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility
  
  const handleOpen = () => setOpenModal(true); // Open the modal
  const handleClose = () => setOpenModal(false); // Close the modal

  const fetchDrivers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/driver/get", {
        withCredentials: true,
      });
      setDriverList(response.data); // Update driver list

      console.log("Driver list:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDrivers(); // Fetch drivers on component mount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(
        "http://localhost:4000/driver/add",
        {
          name: driverName,
          busNumber,
          pickUpPoints, // Pass an array of pick-up points
          contactNumber,
        },
        { withCredentials: true } // Include cookies for authentication
      );
      console.log("Driver Added:", response.data);
      // Reset the form
      setDriverName("");
      setBusNumber("");
      setPickUpPoints([]);
      setContactNumber("");
      handleClose(); // Close the modal
      fetchDrivers(); // Fetch drivers again to update the list
    } catch (error) {
      console.error("Error adding driver:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-14">
        <button
          onClick={handleOpen}
          className="flex gap-2 bg-[#AEE6E6] text-white px-4 py-2 rounded hover:bg-[#41C9E2] max-w-36"
        >
          <p className="text-black font-ProductTitle">Add Driver</p>
          <img src="/bus.png" alt="" className="h-7 w-7" />
        </button>
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
              <h2 className="text-xl font-semibold mb-4">Add Driver</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="driverName" className="block mb-1">Name</label>
                  <input
                    type="text"
                    id="driverName"
                    value={driverName}
                    onChange={(e) => setDriverName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="busNumber" className="block mb-1">Bus Number</label>
                  <input
                    type="text"
                    id="busNumber"
                    value={busNumber}
                    onChange={(e) => setBusNumber(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="pickUpPoints" className="block mb-1">Pick-Up Points</label>
                  <input
                    type="text"
                    id="pickUpPoints"
                    placeholder="Comma-separated points"
                    value={pickUpPoints.join(", ")} // Display as a comma-separated string
                    onChange={(e) => setPickUpPoints(e.target.value.split(","))} // Convert to array
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contactNumber" className="block mb-1">Contact Number</label>
                  <input
                    type="text"
                    id="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Add Driver
                </button>
              </form>
            </div>
          </Box>
        </Modal>

        <div className="flex flex-row gap-3">
          <DriverTable driverList={driverList} />
        </div>
      </div>
    </>
  );
};

export default SchoolDriver;
