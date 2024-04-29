import { PieChart } from "@mui/x-charts";
import React from "react";

const colors = ["green", "red"];

const AttendanceReport = ({ width, height }) => {
  return (
    <div className="flex w-full justify-center mb-4">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 55, label: "Present" },
              { id: 1, value: 15, label: "Absent" },
            ],
          },
        ]}
        width={width}
        height={height}
        colors={colors}
      />
    </div>
  );
};

export default AttendanceReport;
