import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import StaffTable from "../../components/StaffTable";
  import { Modal, Box } from "@mui/material";
const SchoolStaff = () => {
  const [StaffMemberName, setStaffMemberName] = useState("");
  const [staffMemberList, setStaffMemberList] = useState([]);
  const [post, setPost] = useState("");
  const [salary, setSalary] = useState("");
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility
  const handleOpen = () => setOpenModal(true); // Open the modal
  const handleClose = () => setOpenModal(false); // Close the modal

  // const navigate = useNavigate();
  const fetchData = async () => {
    try {
      // withCredentials: true , you're telling Axios to include cookies in cross-origin requests.
      const response = await axios.get("http://localhost:4000/staff/get", {
        withCredentials: true,
      });
      setStaffMemberList(response.data);

      console.log("Staff member list", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const data = await axios.post(
        "http://localhost:4000/staff/add",
        {
          name: StaffMemberName,
          post,
          salary,
        },
        { withCredentials: true }
      );
      console.log("Staff Member  Added:", data);
      setStaffMemberName("");
      setPost("");
      setSalary("");
      handleClose();
      fetchData(); // Fetch data again to update the table
      // navigate("/school");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-14 ">
        <button
          onClick={handleOpen}
          className="flex gap-2 bg-[#AEE6E6] text-white px-4 py-2 rounded hover:bg-[#41C9E2] max-w-36"
        >
          <p className="text-black font-ProductTitle">Add Staff </p>
          <img src="/staff.png" alt="" className="h-7 w-7" />
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
            {" "}
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-semibold mb-4">Add Staff Member</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="StaffMemberName" className="block mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="StaffMemberName"
                    value={StaffMemberName}
                    onChange={(e) => setStaffMemberName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="post" className="block mb-1">
                    Post
                  </label>
                  <input
                    type="text"
                    id="post"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="salary" className="block mb-1">
                    Salary(amount)
                  </label>
                  <input
                    type="number"
                    id="salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Add Staff
                </button>
              </form>
            </div>
          </Box>
        </Modal>

        <div className=" ">
          <StaffTable staffMemberList={staffMemberList} />
        </div>
      </div>
    </>
  );
};

export default SchoolStaff;
