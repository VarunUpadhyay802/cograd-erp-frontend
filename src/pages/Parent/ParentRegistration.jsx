import React, { useState, useEffect } from "react";
import axios from "axios";
import ClassSelector from "../../components/ClassSelector";
import StudentSelector from "../../components/StudentSelector";

const ParentRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState("");
  const [designation, setDesignation] = useState("");
  const [contact, setContact] = useState("");
  const [file, setFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [classID, setClassID] = useState("");
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState([]);
  const [fees, setFees] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadSuccess(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a photo.");
      return;
    }

    if (students.length === 0) {
      return alert("Add Student");
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:4000/parent/register",
        {
          name,
          email,
          password,
          qualification,
          designation,
          contact,
          students,
          file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        setName("");
        setEmail("");
        setPassword("");
        setQualification("");
        setDesignation("");
        setContact("");
        setFile(null);
        setStudents([]);
        setStudentName([]);
      }
    } catch (err) {
      console.error("Error registering parent:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleStudentAdd = (studentId, fees) => {
    if (studentId && fees > 0) {
      const [studId, studName] = studentId.split(":");
      if (!studentName.includes(studName)) {
        setStudents([...students, { studentId: studId, fees: parseInt(fees) }]);
        setStudentName([...studentName, studName]);
        setClassID("");
        setStudentId("");
        setFees(0);
      } else {
        console.log("Student already added");
      }
    } else {
      alert("Fill the inputs correctly");
    }
  };

  const handleRemove = (indexToRemove) => {
    const updatedStudentName = studentName.filter(
      (_, index) => index !== indexToRemove
    );
    const updatedStudents = students.filter(
      (_, index) => index !== indexToRemove
    );
    setStudentName(updatedStudentName);
    setStudents(updatedStudents);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="border p-4 rounded-sm shadow-md">
          <div className="text-gray-600 font-bold text-2xl mb-6">
            Parent Registration Form
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border outline-none px-3 text-sm py-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border outline-none px-3 text-sm py-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border outline-none px-3 text-sm py-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  required
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="border outline-none px-3 text-sm py-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Designation</label>
                <input
                  type="text"
                  required
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  className="border outline-none px-3 text-sm py-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Contact</label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="border outline-none px-3 text-sm py-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Profile Photo</label>
                <input
                  type="file"
                  name="file"
                  required
                  onChange={handleFileChange}
                  className="border outline-none p-2 rounded-sm"
                />
              </div>
            </div>

            <div className="my-6">
              <div className="text-gray-600 font-bold text-xl mb-4">
                Student Details
              </div>
              <div className="flex items-center gap-4 mb-6">
                <ClassSelector setClassID={setClassID} />
                <StudentSelector
                  classId={classID}
                  setStudentId={setStudentId}
                />
                <input
                  type="number"
                  name="fees"
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                  placeholder="Enter fees"
                  className="border outline-none p-2 rounded-sm"
                />
                <div
                  onClick={() => handleStudentAdd(studentId, fees)}
                  className="py-2 px-7 hover:bg-blue-800 cursor-pointer transition-all duration-300 ease-in-out bg-blue-600 rounded-md text-sm text-white"
                >
                  Add
                </div>
              </div>

              <div className="flex items-center gap-4">
                {studentName.length > 0 &&
                  studentName.map((name, index) => (
                    <div
                      key={index}
                      className="p-2 relative py-4 w-[8rem] shadow-md rounded-xl flex flex-col gap-2 bg-slate-400 items-center"
                    >
                      <div
                        onClick={() => handleRemove(index)}
                        className="absolute top-0 right-0 cursor-pointer px-2 py-1 text-white bg-red-600 text-xs rounded-full"
                      >
                        x
                      </div>
                      <img
                        src="/graduated.png"
                        alt=""
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="text-sm font-bold capitalize">{name}</div>
                    </div>
                  ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white py-2 rounded-sm shadow-md hover:bg-black transition-all duration-300 ease-in text-sm w-full"
              disabled={!uploadSuccess}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ParentRegistration;
