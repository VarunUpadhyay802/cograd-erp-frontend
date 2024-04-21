import { useEffect, useState } from 'react';
import axios from 'axios';
import SubjectCards from '../components/SubjectCards';

const AddSubjects = () => {
  const [className, setClassName] = useState('');
  const [subjects, setSubjects] = useState([{ subName: '', subCode: '' }]);
  const [subjectsList,setSubjectsList] = useState([])
  const handleSubjectChange = (index, field, value) => {
    const newSubjects = [...subjects]; // Create a copy of the subjects array
    newSubjects[index][field] = value; // Update the specific field of the specified subject
    setSubjects(newSubjects); // Update the state
  };
  

  const addSubjectField = () => {
    setSubjects([...subjects, { subName: '', subCode: '' }]);
  };

  const removeSubjectField = (index) => {
    const newSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(newSubjects);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/subject/add',
        {
          className,
          subjects,
        },
        { withCredentials: true }
      );
      console.log('Subjects Added:', response.data);
      setClassName('');
      setSubjects([{ subName: '', subCode: '' }]);
    } catch (error) {
      console.error('Error adding subjects:', error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/subject/get", {
        withCredentials: true,
      });
      setSubjectsList(response.data);

      console.log("Subjects List", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add Subjects</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="className" className="block mb-1">
            Class Name:
          </label>
          <input
            type="text"
            id="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
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
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              {subjects.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSubjectField(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
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
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Add Another Subject
        </button>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <SubjectCards subjectsList={subjectsList}/>

    </div>
  );
};

export default AddSubjects;
