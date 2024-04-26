import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassSelector = ({ setClassID }) => {
  const [classesList, setClassesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedClassID, setSelectedClassID] = useState('');

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
      console.error("Error fetching classes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleClassChange = (e) => {
    const selectedID = e.target.value;
    setSelectedClassID(selectedID);
    setClassID(selectedID); // Update the parent component's state
  };

  return (
    <div>
      {loading ? (
        <p>Loading classes...</p>
      ) : (
        <select
          value={selectedClassID}
          onChange={handleClassChange}
          className="px-3 py-2 border border-gray-300 rounded"
        >
          <option value="">Select a class</option>
          {classesList.map((classItem) => (
            <option key={classItem._id} value={classItem._id}>
              {classItem.className}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default ClassSelector;
