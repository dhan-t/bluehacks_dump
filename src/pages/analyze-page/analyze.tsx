import React from "react";
import "./analyze.css";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Container,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Technology", value: 40 },
  { name: "Car Brands", value: 60 },
  { name: "Airlines", value: 20 },
  { name: "Energy", value: 50 },
  { name: "Technology", value: 70 },
  { name: "Car Brands", value: 90 },
  { name: "Airlines", value: 60 },
  { name: "Energy", value: 80 },
];

function Analyze() {
  return (
    <div className="main-div">
      <Typography variant="h4" gutterBottom>
        Analyze your Dataset
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        value="MyDataset.csv"
        InputProps={{
          readOnly: true,
        }}
        sx={{ mb: 4 }}
      />

      <Typography variant="h5" gutterBottom>
        Analytics of MyDataset
      </Typography>

      <div className="component-holder">
        <div className="smaller-components">
          <p>0.88%</p>
          <p>deer</p>
          <h6>Animal</h6>
        </div>
      </div>

      <Typography variant="h6" gutterBottom>
        Panic levels during the video time
      </Typography>
      <Paper sx={{ p: 2, mb: 4 }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      <Typography variant="h6" gutterBottom>
        Extracted data
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>animal</th>
                <th>behavior</th>
                <th>typhoon-reason</th>
                <th>earthqk-reason</th>
                <th>eruption-reason</th>
                <th>flooding-reason</th>
                <th>landslide-reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>deer</td>
                <td>panicking</td>
                <td>0.77%</td>
                <td>0.77%</td>
                <td>0.77%</td>
                <td>0.77%</td>
                <td>0.77%</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Paper>
    </div>
  );
}

export default Analyze;
