import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SubjectCards from '../components/SubjectCards';
import ClassSelector from '../components/ClassSelector';
const AddSubjects = () => {
  const [classID, setClassID] = useState('');
  const [subjects, setSubjects] = useState([{ subName: '', subCode: '' }]);
  const [subjectsList, setSubjectsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubjectChange = (index, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };

  const addSubjectField = () => {
    setSubjects([...subjects, { subName: '', subCode: '' }]);
  };

  const removeSubjectField = (index) => {
    const newSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(newSubjects);
  };

  const fetchSubjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/subject/get", {
        withCredentials: true,
      });

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
    fetchSubjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!classID) {
      console.error("Class ID is required.");
      return;
    }

    if (subjects.some((subject) => !subject.subName.trim() || !subject.subCode.trim())) {
      console.error("All subjects must have a name and code.");
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:4000/subject/add',
        {
          className: classID,
          subjects,
        },
        { withCredentials: true }
      );

      console.log('Subjects added:', response.data);

      // Reset form after successful submission
      setClassID('');
      setSubjects([{ subName: '', subCode: '' }]);
    } catch (error) {
      console.error('Error adding subjects:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add Subjects</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="classID" className="block mb-1">
            Select Class:
          </label>
          <ClassSelector setClassID={setClassID} />
        </div>

        {subjects.map((subject, index) => (
          <div key={index} className="mb-4">
            <div className="flex gap-2">
              <div>
                <label htmlFor={`subName-${index}`} className="block mb-1">
                  Subject Name:
                </label>
                <input
                  type="text"
                  id={`subName-${index}`}
                  value={subject.subName}
                  onChange={(e) => handleSubjectChange(index, 'subName', e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor={`subCode-${index}`} className="block mb-1">
                  Subject Code:
                </label>
                <input
                  type="text"
                  id={`subCode-${index}`}
                  value={subject.subCode}
                  onChange={(e) => handleSubjectChange(index, 'subCode', e.target.value)}
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
      
      {!loading && subjectsList.length > 0 ? (
        <SubjectCards subjectsList={subjectsList} />
      ) : (
        <p>No subjects found</p>
      )}
    </div>
  );
};

export default AddSubjects;
