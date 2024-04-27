import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const StudentBarGraph = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [chartWidth, setChartWidth] = useState(400); // Default width

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  useEffect(() => {
    const chartWidth = windowWidth <= 640 ? 300 : 400; // Adjust for sm size

    setChartWidth(chartWidth);
  }, [windowWidth]);
  const dataset = [
    { id: 0, value: 21, label: "Jan" },
    { id: 1, value: 38, label: "Feb" },
    { id: 2, value: 70, label: "Mar" },
    { id: 3, value: 120, label: "Apr" },
  ];

  const colors = ["#2196f3", "#4caf50", "#f44336", "#ff9800"];

  return (
    <PieChart
      series={[
        {
          data: dataset.map((dataItem) => ({
            id: dataItem.id,
            value: dataItem.value,
            label: dataItem.label,
          })),
        },
      ]}
      width={chartWidth}
      height={200}
      colors={colors}
    />
  );
};

export default StudentBarGraph;
