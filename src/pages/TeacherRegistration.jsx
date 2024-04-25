import  { useEffect, useState } from 'react';
import axios from 'axios';
import TeachersList from '../components/TeachersList';

const TeacherRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [password, setPassword] = useState('');
  const [teachSubjects, setTeachSubjects] = useState([{ subject: '', class: '' }]);

  const addSubject = () => {
    setTeachSubjects([...teachSubjects, { subject: '', class: '' }]);
  };

  const removeSubject = (index) => {
    const updatedSubjects = [...teachSubjects];
    updatedSubjects.splice(index, 1);
    setTeachSubjects(updatedSubjects);
  };

  const handleSubjectChange = (index, key, value) => {
    const updatedSubjects = [...teachSubjects];
    updatedSubjects[index][key] = value;
    setTeachSubjects(updatedSubjects);
  };
  useEffect(()=>{
    fetchTeachers();
  },[])
  const fetchTeachers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/teacherReg/get",
        {
          withCredentials: true,
        }
      );
      setTeachers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/teacherReg/register',
        {
          name,
          email,
          password,
          teachSubjects,
        },
        { withCredentials: true }
      );
      setName(" ");
      setEmail(" ");
     fetchTeachers();
      setTeachSubjects([{ subject: '', class: '' }]);
      setPassword(" ")
      console.log('Teacher registered:', response.data);
      alert('Teacher registered successfully');
      
    } catch (error) {
      console.error('Error registering teacher:', error);
      alert('Failed to register teacher');
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Register New Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">Teachable Subjects</h3>
        {teachSubjects.map((subject, index) => (
          <div key={index} className="mb-4 flex items-center">
            <div className="flex-1">
              <label htmlFor={`subject-${index}`} className="block mb-1">
                Subject:
              </label>
              <input
                type="text"
                id={`subject-${index}`}
                value={subject.subject}
                onChange={(e) => handleSubjectChange(index, 'subject', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex-1 ml-4">
              <label htmlFor={`class-${index}`} className="block mb-1">
                Class:
              </label>
              <input
                type="text"
                id={`class-${index}`}
                value={subject.class}
                onChange={(e) => handleSubjectChange(index, 'class', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Register Teacher
        </button>
      </form>
      <h1 className='font-bold text-28'>All Teachers</h1>
      <TeachersList teacherList={teachers}/>
    </div>
  );
};

export default TeacherRegistration;
