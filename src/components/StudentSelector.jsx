import React, { useEffect, useState } from "react";
import { fetchStudentList, resetStudentList } from "../utils/studentListSlice";
import { useDispatch, useSelector } from "react-redux";

const StudentSelector = ({ classId, setStudentId }) => {
  const [selectedStudentId, setSelectedStudentId] = useState("");

  const studentList = useSelector((state) => state.studentList.studentList);
  const status = useSelector((state) => state.studentList.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (classId) {
      dispatch(fetchStudentList(classId));
    } else {
      setSelectedStudentId("");
    }
    return () => {
      dispatch(resetStudentList());
    };
  }, [dispatch, classId]);

  const handleClassChange = (e) => {
    const selectedID = e.target.value;
    setSelectedStudentId(selectedID);
    setStudentId(selectedID); // Update the parent component's state
  };

  return (
    <div>
      {status === "loading" ? (
        <p>Loading Students...</p>
      ) : (
        <select
          value={selectedStudentId}
          onChange={handleClassChange}
          className="px-3 py-2 border border-gray-300 rounded"
        >
          <option className="mb-1 mt-2 text-15 text-gray-500" value="">
            Select a Student
          </option>
          {studentList.map((student) => (
            <option key={student._id} value={student._id + ":" + student.name}>
              {student.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default StudentSelector;
