import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const StudentPieChart = () => {
  const chartSetting = {
    xAxis: [
      {
        label: "No. of Visits",
      },
    ],
    width: 500,
    height: 300,
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
