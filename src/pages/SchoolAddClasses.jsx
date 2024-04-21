import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ClassCards from "../components/ClassCards"; 
// const baseURL = process.env.API_BASE_URL
const SchoolAddClasses = () => {
  const [className, setClassName] = useState("");
  const [classesList, setClassesList] = useState([]);
  const navigate = useNavigate();

  const fetchClasses = async () => {
    try {
      const response = await axios.get("http://localhost:4000/class/get", {
        withCredentials: true,
      });
      setClassesList(response.data);
      console.log("classList",response.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post(
        "http://localhost:4000/class/create",
        {
            className: className,
        },
        { withCredentials: true }
      );
      console.log("Class added:", response.data);
      setClassName(""); // Reset input field
      fetchClasses(); // Refresh the list of classes
    } catch (error) {
      console.error("Error adding class:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
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

      {/* <ClassesTable classesList={classesList} /> This will render the classes list */}
      <ClassCards classesList={classesList}/>
    </div>
  );
};

export default SchoolAddClasses;
