import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClasses, resetClasses } from "../utils/classSlice";

const ClassSelector = ({ setClassID }) => {
  const [selectedClassID, setSelectedClassID] = useState("");

  const classesList = useSelector((state) => state.classes.classesList);
  const loading = useSelector((state) => state.classes.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClasses());

    return () => {
      dispatch(resetClasses());
    };
  }, [dispatch, setClassID]);

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
          <option className="mb-1 mt-2 text-15 text-gray-500" value="">
            Select a class
          </option>
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
