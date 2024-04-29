import { useState, useEffect } from "react";
import axios from "axios";
import ClassCards from "../../components/ClassCards";
import { Modal, Box } from "@mui/material";
const SchoolAddClasses = () => {
  const [className, setClassName] = useState("");
  const [classesList, setClassesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility
  const handleOpen = () => setOpenModal(true); // Open the modal
  const handleClose = () => setOpenModal(false); // Close the modal

  const fetchClasses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/class/get", {
        withCredentials: true,
      });
      console.log("classes fetched:", response.data);
      if (response.status === 200 && Array.isArray(response.data)) {
        setClassesList(response.data);
      } else {
        setClassesList([]);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setClassesList([]); // No classes found
      } else {
        console.error("Error fetching classes:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses(); // Fetch classes when the component mounts
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate className
    if (!className.trim()) {
      console.error("Class name is required.");
      return; // Don't proceed if className is empty
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/class/create",
        { className },
        { withCredentials: true }
      );

      if (response.status === 200) {
        console.log("Class added:", response.data);
        setClassName(""); // Clear the input field after successful addition
        fetchClasses(); // Refresh the list of classes after addition
      }
      handleClose();
      setClassName("");
    } catch (error) {
      if (error.response) {
        console.error(
          "Error adding class:",
          error.response.status,
          error.response.data.message
        );
      } else {
        console.error("Error adding class:", error);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <div className="items-center">
          <button
            onClick={handleOpen}
            className="flex gap-2 bg-[#AEE6E6] text-white px-4 py-2 rounded hover:bg-[#41C9E2] max-w-36"
          >
            <p className="text-black font-ProductTitle">Add Class</p>
            <img src="/class.png" alt="" className="h-7 w-7" />
          </button>
        </div>

        <Modal open={openModal} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 330,
              backgroundColor: "white",
              padding: 4,
              borderRadius: 2,
              boxShadow: 24,
            }}
          >
            <div className="max-w-md ">
              <h2 className="text-xl font-semibold mb-4">Add Class</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="className" className="block mb-1">
                    Class Name:
                  </label>
                  <input
                    type="text"
                    id="className"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Add Class
                </button>
              </form>
            </div>
          </Box>
        </Modal>

        <div>
          {!loading && classesList.length > 0 ? (
            <div className="   flex flex-col gap-3 sm:flex sm:flex-row sm:flex-wrap ">
              <ClassCards classesList={classesList} />
            </div>
          ) : (
            <p>No classes found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SchoolAddClasses;
