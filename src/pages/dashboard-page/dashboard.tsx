import React from "react";
import "./dashboard.css";
import { Box, Typography, Paper, Grid } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
} from "recharts";

const data = [
  { name: "Week 1", "Maya bird": 40, "Wild boar": 60, Dog: 80 },
  { name: "Week 2", "Maya bird": 30, "Wild boar": 50, Dog: 70 },
  { name: "Week 3", "Maya bird": 20, "Wild boar": 40, Dog: 60 },
  { name: "Week 4", "Maya bird": 50, "Wild boar": 70, Dog: 90 },
];

const bubbleData = [
  { x: 10, y: 30, z: 20, name: "Week 1" },
  { x: 30, y: 50, z: 30, name: "Week 2" },
  { x: 50, y: 70, z: 40, name: "Week 3" },
  { x: 70, y: 90, z: 50, name: "Week 4" },
];

function Dashboard() {
  return (
    <div className="main-div">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <div className="component-holder">
        <Typography variant="h6" gutterBottom>
          Comparison between animals (Historical data)
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Maya bird" stroke="#8884d8" />
            <Line type="monotone" dataKey="Wild boar" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Dog" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="component-holder">
        <Typography variant="h6" gutterBottom>
          Correlation Analysis
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart>
            <CartesianGrid />
            <XAxis dataKey="x" />
            <YAxis dataKey="y" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            <Scatter name="Bubble" data={bubbleData} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="component-holder">
        <Typography variant="h6" gutterBottom>
          Correlation Analysis
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Maya bird" fill="#8884d8" />
            <Bar dataKey="Wild boar" fill="#82ca9d" />
            <Bar dataKey="Dog" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
