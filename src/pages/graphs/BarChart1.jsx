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
      data: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
      backgroundColor: "rgba(255, 165, 0, 0.6)", // Orange color
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
      max: 1.0,
    },
  },
};

const WeeklyBarChart = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6" component="div" gutterBottom>
          Entrate settimanali
        </Typography>
        <Bar data={data} options={options} />
      </Paper>
    </Box>
  );
};

export default WeeklyBarChart;
