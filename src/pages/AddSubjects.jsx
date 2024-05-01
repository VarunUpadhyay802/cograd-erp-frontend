import { useState, useEffect } from "react";
import axios from "axios";
import SubjectCards from "../components/SubjectCards";
import ClassSelector from "../components/ClassSelector";
import { Modal, Box } from "@mui/material";

const AddSubjects = () => {
  const [classID, setClassID] = useState("");
  const [subjects, setSubjects] = useState([{ subName: "", subCode: "" }]);
  const [subjectsList, setSubjectsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const handleSubjectChange = (index, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };

  const addSubjectField = () => {
    setSubjects([...subjects, { subName: "", subCode: "" }]);
  };

  const removeSubjectField = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const fetchSubjects = async (classID) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/subject/classSubjects/${classID}`,
        { withCredentials: true }
      );
      if (response.status === 200 && Array.isArray(response.data)) {
        setSubjectsList(response.data);
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

  useEffect(() => {
    if (classID) {
      fetchSubjects(classID);
    }
  }, [classID]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!classID) {
      console.error("Class ID is required.");
      return;
    }

    if (subjects.some((s) => !s.subName.trim() || !s.subCode.trim())) {
      console.error("All subjects must have a name and code.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/subject/add",
        {
          className: classID,
          subjects,
        },
        { withCredentials: true }
      );
      fetchSubjects(classID);
      console.log("Subjects added:", response.data);

      setClassID("");
      setSubjects([{ subName: "", subCode: "" }]);
    } catch (error) {
      console.error("Error adding subjects:", error);
    }

    handleClose();
  };

  return (
    <>
      <div className="flex flex-col gap-6 m-4 lg:flex lg:gap-8 lg:flex-row">
        <div className="lg:w-1/2">
          <button
            onClick={handleOpen}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            <span className="font-semibold">Add Subjects</span>
            <img src="/class.png" alt="Add" className="h-7 w-7" />
          </button>
        </div>

        <Modal open={openModal} onClose={handleClose} className="">
          <Box
            sx={{
              position: "absolute",
              top: {
                xs: "60%", 
                sm: "55%",
                lg: "50%", 
              },
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: {
                xs: 350, 
                sm: 400, 
                lg: 600, 
              },
              padding: 4,
              borderRadius: 4,
              boxShadow: 24,
              backgroundColor: "white",
            }}
          >
            <h2 className="text-2xl font-bold text-gray-800">Add Subjects</h2>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4 ">
              <div>
                <label
                  htmlFor="classID"
                  className="block text-sm font-medium text-gray-600"
                >
                  Select Class:
                </label>
                <ClassSelector setClassID={setClassID} />
              </div>
              {subjects.map((subject, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <div>
                    <label
                      htmlFor={`subName-${index}`}
                      className="block text-sm font-medium text-gray-600"
                    >
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`subCode-${index}`}
                      className="block text-sm font-medium text-gray-600"
                    >
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  {subjects.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSubjectField(index)}
                      className="bg-red-500 text-white h-7 w-12 rounded-lg mt-5 "
                    >
                      X
                    </button>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 ">
                <button
                  type="button"
                  onClick={addSubjectField}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg w-full"
                >
                  Add Another Subject
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </Box>
        </Modal>

        <div className="lg:w-1/2">
          {!loading && subjectsList.length > 0 ? (
            <SubjectCards subjectsList={subjectsList} />
          ) : (
            <p className="text-lg text-gray-700 font-bold">
              Please add subjects.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AddSubjects;
