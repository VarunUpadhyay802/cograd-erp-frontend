import React from "react";
// import StudentList from "../../components/Students/StudentList";
import StudentLists from "../../components/Students/StudentLists/StudentLists";
import StudentPieChart from "../../components/Students/StudentLists/StudentPieChart";
import StudentBarGraph from "../../components/Students/StudentLists/StudentBarGraph";

const StudentHomePage = () => {
  return (
    <div>
      <div className="text-2xl font-bold text-gray-500 mb-6">
        Student Homepage
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
