import React, { useEffect, useState } from "react";
import axios from "axios";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the list of teachers when the component is mounted
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/teacherReg/get", {
          withCredentials: true,
        });

        if (response.status === 200 && Array.isArray(response.data)) {
          setTeachers(response.data);
        } else {
          setError("Error fetching teachers.");
        }
      } catch (err) {
        console.error("Error fetching teachers:", err);
        setError("Failed to fetch teachers.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Teacher List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <div key={teacher._id} className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold">{teacher.name}</h3>
            <p className="text-sm text-gray-600">Email: {teacher.email}</p>
            <h4 className="mt-2 text-md font-semibold">Subjects Taught:</h4>
            <ul>
              {teacher.teachSubjects.map((ts, index) => (
                <li key={index}>
                  Subject: {ts.subject?.name || "Unknown"}, Class: {ts.class?.className || "Unknown"}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
