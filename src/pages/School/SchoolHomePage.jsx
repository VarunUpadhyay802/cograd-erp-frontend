import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';

const SchoolHomePage = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);

  const totalIncome = 10000;
  const totalExpense = 4000;

  // Fetch total students and teachers when the component mounts
  //pending!!!!
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const studentResponse = await axios.get('http://localhost:4000/student/total'); // Fetch total student count
        const teacherResponse = await axios.get('/api/teachers/total'); // Fetch total teacher count

        if (studentResponse.status === 200) {
          setTotalStudents(studentResponse.data.totalCount);
        }

        if (teacherResponse.status === 200) {
          setTotalTeachers(teacherResponse.data.totalCount);
        }
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts(); // Invoke the fetchCounts function
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
            <img src="/students.png" alt="" className="h-10 w-10" />
            <div className="mt-1 font-poppins font-semibold">Total Students</div>
            <CountUp end={totalStudents} duration={3} className="text-2xl text-green-500" />
          </div>

          <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
            <img src="/teacher.png" alt="" className="h-10 w-10" />
            <div className="mt-1 font-poppins font-semibold">Total Teachers</div>
            <CountUp end={totalTeachers} duration={3} className="text-2xl text-green-500" />
          </div>

          <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
            <img src="/cost.png" alt="" className="h-10 w-10" />
            <div className="mt-1 font-poppins font-semibold">Total Income</div>
            <div className="text-2xl text-green-500">
              &#8377; <CountUp end={totalIncome} duration={3} className="text-2xl text-green-500" />
            </div>
          </div>

          <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
            <img src="/expense.png" alt="" className="h-10 w-10" />
            <div className="mt-1 font-poppins font-semibold">Total Expenses</div>
            <div className="text-2xl text-red-500">
              &#8377; <CountUp end={totalExpense} duration={3} className="text-2xl text-red-500" />
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-4 mt-4">
          <div className="md:flex-1 h-178 border p-3 rounded-md shadow-sm bg-white">Upcoming Events</div>
          <div className="md:flex-1 h-178 border p-3 rounded-md shadow-sm bg-white">Important Notices</div>
        </div>
      </div>
    </>
  );
};

export default SchoolHomePage;
