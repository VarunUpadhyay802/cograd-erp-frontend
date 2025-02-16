import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchools } from "../../utils/schoolSlice";
import Card from "../../components/Card";

const SchoolRegistration = () => {
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const schoolList = useSelector((state) => state.schools.schoolList);
  const loading = useSelector((state) => state.schools.loading);

  useEffect(() => {
    // Check if schoolList is empty, if so, fetch the schools
    if (schoolList.length === 0) {
      dispatch(fetchSchools());
    }
  }, [dispatch, schoolList]); // Dependency array includes schoolList
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/school/register",
        {
          schoolName,
          email,
          password,
        }
      );

      if (response.status === 200) {
        console.log("School registration successful");
        setSchoolName("");
        setEmail("");
        setPassword("");
        dispatch(fetchSchools());
      }
    } catch (err) {
      console.log("Error registering school:", err);
    }
  };

  return (
    <div>
      <div className="border p-4 rounded-sm shadow-md">
        <div className="text-gray-600 font-bold text-2xl mb-6">
          School Registration Form
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 fs:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="text-sm">School Name</label>
              <input
                type="text"
                name="schoolName"
                onChange={(e) => setSchoolName(e.target.value)}
                value={schoolName}
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
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-sm shadow-md hover:bg-black cursor-pointer transition-all duration-300 ease-in text-sm"
          >
            Register
          </button>
        </form>
      </div>

      <div className="mt-6 border p-4 rounded-sm shadow-md ">
        <div className="text-2xl font-bold mb-4 text-gray-600">
          List of Registered Schools
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="flex  gap-2 flex-wrap justify-start">

            {schoolList.map((school, index) => (
              <Card
                key={index}
                title={school.schoolName}
                subtext={school.email}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SchoolRegistration;
