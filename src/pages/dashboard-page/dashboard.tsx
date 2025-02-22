import React from "react";
import "./dashboard.css";
import { Typography, Paper, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
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

// Sample data for charts
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

// Sample data for DataGrid
const requests = [
  {
    _id: "1",
    animal_name: "Deer",
    behaviour: "Panicking",
    "typhoon-reason": "0.29%",
    "earthquake-reason": "0.66%",
    "eruption-reason": "0.55%",
    "flooding-reason": "0.88%",
    "landslide-reason": "0.88%",
  },
  {
    _id: "2",
    animal_name: "Boar",
    behaviour: "Running",
    "typhoon-reason": "0.35%",
    "earthquake-reason": "0.70%",
    "eruption-reason": "0.60%",
    "flooding-reason": "0.90%",
    "landslide-reason": "0.85%",
  },
  // Add more realistic data as needed
];

function Dashboard() {
  const rows = requests.map((request, index) => ({
    index: index + 1,
    id: request._id,
    animal_name: request.animal_name,
    behaviour: request.behaviour,
    "typhoon-reason": request["typhoon-reason"],
    "earthquake-reason": request["earthquake-reason"],
    "eruption-reason": request["eruption-reason"],
    "flooding-reason": request["flooding-reason"],
    "landslide-reason": request["landslide-reason"],
  }));

  const columns = [
    { field: "index", headerName: "ID", width: 50 },
    { field: "animal_name", headerName: "Animal", width: 150 },
    { field: "behaviour", headerName: "Behaviour", width: 150 },
    { field: "typhoon-reason", headerName: "Typhoon Reason", width: 150 },
    { field: "earthquake-reason", headerName: "Earthquake Reason", width: 150 },
    { field: "eruption-reason", headerName: "Eruption Reason", width: 150 },
    { field: "flooding-reason", headerName: "Flooding Reason", width: 150 },
    { field: "landslide-reason", headerName: "Landslide Reason", width: 150 },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className="main-div">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <div className="dashboard-contents">
        <div className="bigger-components">
          <div className="component-holder">
            <Typography variant="h6">
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
        </div>

        <div className="smaller-components">
          <div className="component-holder">
            <Typography variant="h6">Correlation Analysis</Typography>
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
        </div>
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

      <div className="component-holder">
        <div style={{ height: 400, width: "100%" }}>
          <Typography variant="h6" gutterBottom>
            Historical data
          </Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10, 50, 100]}
            sx={{
              backgroundColor: "white",
              border: "none",
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f5f5f5",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
