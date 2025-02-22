import React from "react";
import "./analyze.css";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
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
        <h2>Summary of dataset:</h2>
        <div className="small-holder">
          <div className="smaller-components">
            <div className="summary-holder">
              <p>0.88%</p>
              <p>typhoon</p>
            </div>
            <h6>Disaster</h6>
          </div>
          <div className="smaller-components">
            <div className="summary-holder">
              <p>0.88%</p>
              <p>typhoon</p>
            </div>
            <h6>Disaster</h6>
          </div>
          <div className="smaller-components">
            <div className="summary-holder">
              <p>0.88%</p>
              <p>typhoon</p>
            </div>
            <h6>Disaster</h6>
          </div>
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
      <div className="component-holder">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>animal</TableCell>
                <TableCell>behavior</TableCell>
                <TableCell>typhoon-reason</TableCell>
                <TableCell>earthqk-reason</TableCell>
                <TableCell>eruption-reason</TableCell>
                <TableCell>flooding-reason</TableCell>
                <TableCell>landslide-reason</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>deer</TableCell>
                <TableCell>panicking</TableCell>
                <TableCell>0.77%</TableCell>
                <TableCell>0.77%</TableCell>
                <TableCell>0.77%</TableCell>
                <TableCell>0.77%</TableCell>
                <TableCell>0.77%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Analyze;
