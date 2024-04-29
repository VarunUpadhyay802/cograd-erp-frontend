import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { PieChart } from "@mui/x-charts/PieChart";
import AttendanceReport from "./AttendanceReport";

const HomeComponent = () => {
  const totalAssignments = 12;
  const totalSubjects = 9;

  const colors = ["green", "red"];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
          <img src="/books.png" alt="" className="h-10 w-10" />
          <div className="mt-1 font-poppins font-semibold">Total Subjects</div>
          <CountUp
            end={totalSubjects}
            duration={3}
            className="text-2xl text-green-500"
          />
        </div>
        <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
          <img src="/assignment.png" alt="" className="h-10 w-10" />
          <div className="mt-1 font-poppins font-semibold">
            Total Assignments
          </div>
          <CountUp
            end={totalAssignments}
            duration={3}
            className="text-2xl text-green-500"
          />
        </div>
        <AttendanceReport />
      </div>
      <div className="flex md:flex-row flex-col gap-4 mt-4">
        <div className="md:flex-1 h-178 border p-3 rounded-md shadow-sm bg-white">
          Upcoming Events
        </div>
        <div className="md:flex-1 h-178 border p-3 rounded-md shadow-sm bg-white">
          Important Notices
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
