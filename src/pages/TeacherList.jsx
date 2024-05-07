import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../utils/teacherSlice";

const TeacherList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get teachers and loading status from Redux state
  const teachers = useSelector((state) => state.teachers.teachers);
  const loading = useSelector((state) => state.teachers.loading);

  useEffect(() => {
    // Fetch teachers when component mounts
    dispatch(fetchTeachers());
  }, [dispatch]);

  const checkIfClassTeacher = async (teacherId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/classTeacher/check/${teacherId}`,
        { withCredentials: true }
      );

      if (response.status === 200) {
        return response.data.isClassTeacher;
      }
    } catch (err) {
      console.error("Error checking class teacher status:", err);
      return false;
    }
  };

  const handleMakeClassTeacher = async (teacherId) => {
    const isClassTeacher = await checkIfClassTeacher(teacherId);

    if (isClassTeacher) {
      alert("This teacher is already a class teacher.");
    } else {
      navigate(`/classTeacherRegistration/${teacherId}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Teacher List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <div key={teacher._id} className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold capitalize">{teacher.name}</h3>
            <p className="text-sm text-gray-600">{teacher.email}</p>
            <h4 className="mt-2 text-md font-semibold">Subjects Taught:</h4>
            <ul>
              {teacher.teachSubjects.map((ts, index) => (
                <li key={index}>
                  Subject: {ts.subject?.subName || "Unknown"},
                  {/* Class: {ts.class?.className || "Unknown"} */}
                </li>
              ))}
            </ul>

            <button
              className="bg-blue-500 text-white px-3 py-2 mt-4 rounded"
              onClick={() => handleMakeClassTeacher(teacher._id)}
            >
              Make Class Teacher
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
