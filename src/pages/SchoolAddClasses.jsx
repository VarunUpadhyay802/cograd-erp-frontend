import { useState, useEffect } from "react";
import axios from "axios";
import ClassCards from "../components/ClassCards";

const SchoolAddClasses = () => {
  const [className, setClassName] = useState("");
  const [classesList, setClassesList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClasses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/class/get", {
        withCredentials: true,
      });

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

      {!loading && classesList.length > 0 ? (
        <ClassCards classesList={classesList} />
      ) : (
        <p>No classes found</p>
      )}
    </div>
  );
};

export default SchoolAddClasses;
