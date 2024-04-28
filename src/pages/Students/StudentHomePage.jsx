import React from "react";
// import StudentList from "../../components/Students/StudentList";
import StudentLists from "../../components/Students/StudentLists/StudentLists";
import StudentPieChart from "../../components/Students/StudentLists/StudentPieChart";
import StudentBarGraph from "../../components/Students/StudentLists/StudentBarGraph";

const StudentHomePage = () => {
  // Define the total number of users
  const totalUsers = 650; // This could be derived from data source or by counting rows

  return (
    <div>
      <div className="text-2xl font-bold text-gray-500 mb-6">
        Student Homepage
      </div>

      {/* Display total number of users */}
      <div className="mb-6 text-xl text-gray-500 ">
        Total Users: {totalUsers}
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
