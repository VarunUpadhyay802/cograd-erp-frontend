import React from 'react';
import CountUp from 'react-countup';
import StudentLists from '../../components/Students/StudentLists/StudentLists';
import StudentPieChart from '../../components/Students/StudentLists/StudentPieChart';
import StudentBarGraph from '../../components/Students/StudentLists/StudentBarGraph';

const StudentHomePage = () => {
  // Define the total number of users to count up to
  const totalUsers = 650;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Homepage</h1>

      {/* Display total number of users with a count-up animation and Tailwind styling */}
      <div className="mb-6 text-2xl font-semibold text-teal-600 flex items-center gap-2">
        <span>Total Users:</span>
        <CountUp end={totalUsers} duration={3} className="text-3xl text-gray-500" />
      </div>

      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center mb-6">
        <StudentPieChart />
        <StudentBarGraph />
      </div>

      <StudentLists />
    </div>
  );
};

export default StudentHomePage;
