import { PieChart } from "@mui/x-charts";
import React from "react";

const colors = ["green", "red"];

const AttendanceReport = () => {
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
        width={400}
        height={200}
        colors={colors}
      />
    </div>
  );
};

export default AttendanceReport;
