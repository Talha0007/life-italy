import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, Paper, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary components for the pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
    "Domenica",
  ],
  datasets: [
    {
      label: "Entrate settimanali",
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)", // Red
        "rgba(54, 162, 235, 0.6)", // Blue
        "rgba(255, 206, 86, 0.6)", // Yellow
        "rgba(75, 192, 192, 0.6)", // Green
        "rgba(153, 102, 255, 0.6)", // Purple
        "rgba(255, 159, 64, 0.6)", // Orange
        "rgba(199, 199, 199, 0.6)", // Grey
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)", // Red
        "rgba(54, 162, 235, 1)", // Blue
        "rgba(255, 206, 86, 1)", // Yellow
        "rgba(75, 192, 192, 1)", // Green
        "rgba(153, 102, 255, 1)", // Purple
        "rgba(255, 159, 64, 1)", // Orange
        "rgba(199, 199, 199, 1)", // Grey
      ],
      borderWidth: 1,
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
      text: "Entrate settimanali",
    },
  },
};

const WeeklyPieChart = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6" component="div" gutterBottom>
          Entrate settimanali
        </Typography>
        <Pie data={data} options={options} />
      </Paper>
    </Box>
  );
};

export default WeeklyPieChart;
