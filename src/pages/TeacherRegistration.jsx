import  { useEffect, useState } from "react";
import axios from "axios";
import ClassSelector from "../components/ClassSelector"; // Import the ClassSelector component

const TeacherRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedClassID, setSelectedClassID] = useState("");
  const [teachSubjects, setTeachSubjects] = useState([{ subjectId: "", classId: "" }]);
  const [subjectsList, setSubjectsList] = useState([]);
  const [classesList, setClassesList] = useState([]);

  useEffect(() => {
    fetchClasses(); // Fetch the classes at mount
  }, []); 

  const fetchClasses = async () => {
    try {
      const response = await axios.get("http://localhost:4000/class/get", {
        withCredentials: true,
      });
      setClassesList(response.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const fetchSubjectsByClass = async (classId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/subject/classSubjects/${classId}`,
        { withCredentials: true }
      );
      setSubjectsList(response.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const handleClassChange = (classId) => {
    setSelectedClassID(classId);
    fetchSubjectsByClass(classId); // Fetch the subjects related to the selected class
    setTeachSubjects([{ subjectId: "", classId: classId }]); // Reset subjects with new class
  };

  const addSubject = () => {
    setTeachSubjects([...teachSubjects, { subjectId: "", classId: selectedClassID }]);
  };

  const removeSubject = (index) => {
    const updatedSubjects = [...teachSubjects];
    updatedSubjects.splice(index, 1);
    setTeachSubjects(updatedSubjects);
  };

  const handleSubjectChange = (index, subjectId) => {
    const updatedSubjects = [...teachSubjects];
    updatedSubjects[index].subjectId = subjectId;
    setTeachSubjects(updatedSubjects);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedTeachSubjects = teachSubjects.map((subjectObj) => ({
      subject: subjectObj.subjectId,
      class: subjectObj.classId,
    }));
    try {
      const response = await axios.post(
        "http://localhost:4000/teacherReg/register",
        {
          name,
          email,
          password,
          teachSubjects: formattedTeachSubjects,
        },
        { withCredentials: true }
      );
   
      setName("");
      setEmail("");
      setPassword("");
      className("");
      setTeachSubjects([{ subjectId: "", classId: "" }]);
      alert("Teacher registered successfully");
    } catch (error) {
      console.error("Error registering teacher:", error);
      alert("Failed to register teacher");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Register New Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            autoComplete="current-username"
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="current-username"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="classSelector" className="block mb-1">Select Class:</label>
          <ClassSelector setClassID={handleClassChange} />
        </div>

        {selectedClassID && (
          <>
            <h3 className="text-lg font-semibold mb-2">Teachable Subjects</h3>
            {teachSubjects.map((teachSubject, index) => (
              <div key={index} className="mb-4 flex items-center">
                <div className="flex-1">
                  <label htmlFor={`subject-${index}`} className="block mb-1">Subject:</label>
                  <select
                    id={`subject-${index}`}
                    value={teachSubject.subjectId}
                    onChange={(e) => handleSubjectChange(index, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select Subject</option>
                    {subjectsList.map((subject) => (
                      <option key={subject._id} value={subject._id}>
                        {subject.subName}
                      </option>
                    ))}
                  </select>
                </div>

                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeSubject(index)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            
            <button type="button" onClick={addSubject} className="text-blue-500 mb-4">
              Add Another Subject
            </button>
          </>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Register Teacher
        </button>
      </form>
    </div>
  );
};

export default TeacherRegistration;
