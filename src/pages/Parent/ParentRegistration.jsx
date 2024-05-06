import React, { useState, useEffect } from "react";
import axios from "axios";

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

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("qualification", qualification);
    formData.append("designation", designation);
    formData.append("contact", contact);
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:4000/parent/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        console.log(response.data);
        setName("");
        setEmail("");
        setPassword("");
        setQualification("");
        setDesignation("");
        setContact("");
        setFile(null);
      }
    } catch (err) {
      console.error("Error registering parent:", err);
    } finally {
      setLoading(false);
    }
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
