import React, { useState, useEffect } from "react";
import axios from "axios";
import SubjectCards from "../components/SubjectCards"; // A component to display a list of subjects
import ClassSelector from "../components/ClassSelector"; // A component to select a class

const AddSubjects = () => {
  const [classID, setClassID] = useState(""); // Store the selected class ID
  const [subjects, setSubjects] = useState([{ subName: "", subCode: "" }]); // For adding new subjects
  const [subjectsList, setSubjectsList] = useState([]); // List of subjects for the selected class
  const [loading, setLoading] = useState(true);

  const handleSubjectChange = (index, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects); // Update subject information
  };

  const addSubjectField = () => {
    setSubjects([...subjects, { subName: "", subCode: "" }]); // Add another subject field
  };

  const removeSubjectField = (index) => {
    const newSubjects = subjects.filter((_, i) => i !== index); // Remove a subject field
    setSubjects(newSubjects);
  };

  const fetchSubjects = async (classID) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/subject/classSubjects/${classID}`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200 && Array.isArray(response.data)) {
        setSubjectsList(response.data); // Store subjects related to the selected class
      } else {
        setSubjectsList([]);
      }
    } catch (error) {
      console.error("Error fetching subjects:", error);
      setSubjectsList([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch subjects for the selected class ID
  useEffect(() => {
    if (classID) {
      fetchSubjects(classID); // Fetch only when a class ID is set
    }
  }, [classID]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!classID) {
      console.error("Class ID is required."); // Class ID must be selected
      return;
    }

    if (
      subjects.some(
        (subject) => !subject.subName.trim() || !subject.subCode.trim()
      )
    ) {
      console.error("All subjects must have a name and code."); // Each subject must have a name and code
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/subject/add",
        {
          className: classID, // Class to which the subjects are being added
          subjects,
        },
        { withCredentials: true } // Include credentials in the request
      );

      console.log("Subjects added:", response.data);

      // Reset the form after successful submission
      setClassID("");
      setSubjects([{ subName: "", subCode: "" }]);
    } catch (error) {
      console.error("Error adding subjects:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4   sm:flex sm:gap-5 lg:gap-3 sm:justify-end md:flex md:flex-row m-1 sm:m-4">
      <div className="lg:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Add Subjects</h2>
          <form onSubmit={handleSubmit}>
            {" "}
            {/* Handle the form submission */}
            <div className="mb-4">
              <label htmlFor="classID" className="block mb-1 mt-2 text-15 text-gray-500">
                Select Class:
              </label>
              <ClassSelector setClassID={setClassID} />{" "}
              {/* Update classID on class selection */}
            </div>
            {subjects.map((subject, index) => (
              <div key={index} className="mb-4">
                {" "}
                {/* Subject input fields */}
                <div className="flex gap-2">
                  <div>
                    <label htmlFor={`subName-${index}`} className="block mb-1 mt-2 text-15 text-gray-500">
                      Subject Name:
                    </label>
                    <input
                      type="text"
                      id={`subName-${index}`}
                      value={subject.subName}
                      onChange={(e) =>
                        handleSubjectChange(index, "subName", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor={`subCode-${index}`} className="block mb-1 mt-2 text-15 text-gray-500">
                      Subject Code:
                    </label>
                    <input
                      type="text"
                      id={`subCode-${index}`}
                      value={subject.subCode}
                      onChange={(e) =>
                        handleSubjectChange(index, "subCode", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                  {subjects.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSubjectField(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      X
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addSubjectField}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Another Subject
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="lg:w-1/2">
          {!loading && subjectsList.length > 0 ? (
            <SubjectCards subjectsList={subjectsList} />
          ) : (
            <p className="text-15 font-bold md:p-10">Please Add the Subjects </p>
          )}
        </div>
        </div>
    </>
  );
};

export default AddSubjects;
