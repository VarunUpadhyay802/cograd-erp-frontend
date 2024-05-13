/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ClassSelector from "../ClassSelector";
// import { Navigate } from "react-router-dom";
// import "./student.css";

const StudentsRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [classID, setClassID] = useState("");
  const [file, setFile] = useState(null);
  const [fatherEmail, setFatherEmail] = useState("");
  const [fathersName, setFatherName] = useState("");

  const [studentList, setStudentList] = useState([]);

  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      setUploadSuccess(true);
      console.log(uploadSuccess);
    }
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.endsWith("@cograd.in")) {
      alert("Email must end with @cograd.in");
      return;
    }
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:4000/student/register",
        {
          name,
          email,
          password,
          className: classID,
          file,
          fatherEmail,
          fathersName,
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
        setPassword("");
        setFile(null);
        setEmail("");
        setClassID("");
        setFatherEmail("")
        setFatherName("")
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      fetchStudents();
    }
  };

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:4000/student/get/list",
        {
          withCredentials: true,
        }
      );
      setStudentList(response.data.studentList);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="border p-4 rounded-sm shadow-md">
            <div className="text-gray-600 font-bold text-2xl mb-6">
              Student Registration Form
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 fs:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex flex-col">
                    <label className="text-sm">Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                      className="border outline-none px-3 text-sm py-2 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="name@cograd.in"
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
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      className="border outline-none px-3 text-sm py-2 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm">Father's Name</label>
                    <input
                      type="text"
                      name="fathersName"
                      onChange={(e) => setFatherName(e.target.value)}
                      value={fathersName}
                      required
                      className="border outline-none px-3 text-sm py-2 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm">Father's Email</label>
                    <input
                      type="email"
                      name="fatherEmail"
                      onChange={(e) => setFatherEmail(e.target.value)}
                      value={fatherEmail}
                      required
                      className="border outline-none px-3 text-sm py-2 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm">Class</label>
                    <ClassSelector setClassID={setClassID} />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm">Profile</label>
                    <input
                      type="file"
                      required
                      name="file"
                      onChange={handleFileChange}
                      className="p-2 text-sm text-black appearance-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!uploadSuccess}
                  className="flex justify-center items-center w-full bg-green-500 text-white py-2 rounded-sm shadow-md hover:bg-black cursor-pointer transition-all duration-300 ease-in text-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="mt-6 border p-4 rounded-sm shadow-md">
            <div className="text-2xl font-bold mb-4 text-gray-600">
              Student Lists
            </div>
            {/* <div className="grid grid-cols-1 fs:grid-cols-2 md:grid-cols-3 gap-4 ">
              {studentList.length > 0 &&
                studentList.map((data, index) => (
                  <div
                    key={index}
                    className="border p-2 mb-2 rounded-sm shadow-md cursor-pointer"
                  >
                    <div className="flex items-center mb-2 gap-4">
                      <img
                        src={data.profile}
                        alt="profile"
                        className="h-14 w-14 rounded-full"
                      />
                      <div className="flex flex-col items-start">
                        <div className="text-lg font-semibold">{data.name}</div>
                        <div className="text-xs text-gray-500">
                          {data.className.className}
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                ))}
            </div> */}
          </div>
        </>
      )}
    </div>
  );
};

export default StudentsRegistration;
