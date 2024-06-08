import React from "react";
import { Bar } from "react-chartjs-2";
import { Box, Paper, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Monthly Earnings",
      data: [10, 0, 0, 0, 0, 0, 0, 40, 0, 0, 30, 10],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Earnings",
    },
  },
  scales: {
    x: {
      ticks: {
        callback: function (val, index) {
          return this.getLabelForValue(val);
        },
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};

const BarChart = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6" component="div" gutterBottom>
          Monthly Earnings
        </Typography>
        <Bar data={data} options={options} />
      </Paper>
    </Box>
  );
};

export default BarChart;
