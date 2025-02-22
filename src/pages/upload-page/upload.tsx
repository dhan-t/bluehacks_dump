import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Container,
} from "@mui/material";

function Upload() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Upload your video
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        value="MyVideo.mp4"
        InputProps={{
          readOnly: true,
        }}
        sx={{ mb: 4 }}
      />

      <Typography variant="h5" gutterBottom>
        Video analyze
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={6}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <img
              src="https://via.placeholder.com/300x150"
              alt="Raw video"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="body2">Raw video</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <img
              src="https://via.placeholder.com/300x150"
              alt="Analyzed"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="body2">Analyzed</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom>
        Download extensive analytics
      </Typography>
      <Button variant="contained" color="success" sx={{ mb: 4 }}>
        Download CSV
      </Button>

      <Typography variant="h5" gutterBottom>
        Analyzation context
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography variant="body1">
          animal: deer 0.89%
          <br />
          behavior: panicking 0.70%
          <br />
          <br />
          Possible reasons:
          <br />
          typhoon: 0.29%
          <br />
          earthquake: 0.66%
          <br />
          volcanic eruptions: 0.55%
          <br />
          flooding: 0.88%
          <br />
          landslide: 0.88%
        </Typography>
      </Paper>
    </Container>
  );
}

export default Upload;
