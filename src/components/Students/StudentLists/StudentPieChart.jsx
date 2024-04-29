import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const StudentPieChart = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [chartWidth, setChartWidth] = useState(500); // Default width
  const [chartLength, setChartLength] = useState(300); // Default width

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  useEffect(() => {
    const chartWidth = windowWidth <= 640 ? 400 : 500; // Adjust for sm size
    const chartLength = windowWidth <= 640 ? 250 : 300; // Adjust for sm size

    setChartWidth(chartWidth);
    setChartLength(chartLength);
  }, [windowWidth]);
  const chartSetting = {
    xAxis: [
      {
        label: "No. of Visits",
      },
    ],
    width: chartWidth,
    height: chartLength,
  };
  const dataset = [
    {
      month: "Jan",
      persons: 21,
    },
    {
      month: "Feb",
      persons: 38,
    },
    {
      month: "Mar",
      persons: 70,
    },
    {
      month: "Apr",
      persons: 120,
    },
  ];

  const valueFormatter = (value) => `${value}`;

  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[{ dataKey: "persons", label: "No. of Visits", valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
};

export default StudentPieChart;
