import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubjectCards from '../components/SubjectCards';
import ClassSelector from '../components/ClassSelector';

const ViewSubjects = () => {
  const [classID, setClassID] = useState('');
  const [subjectsList, setSubjectsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSubjects = async (classID) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:4000/subject/classSubjects/${classID}`, {
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
    if (classID) {
      fetchSubjects(classID);
    }
  }, [classID]);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">View Subjects</h2>
      <div className="mb-4">
        <label htmlFor="classID" className="block mb-1">Select Class:</label>
        <ClassSelector setClassID={setClassID} />
      </div>

      {!loading && subjectsList.length > 0 ? (
        <SubjectCards subjectsList={subjectsList} />
      ) : loading ? (
        null
      ) : (
        <p>No subjects found</p>
      )}
    </div>
  );
};

export default ViewSubjects;
