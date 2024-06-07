import React from "react";
import { Grid, Button } from "@mui/material";

const ButtonExample = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8} sm={3} md={4}>
        <Button variant="contained" bgcolor="#f8f8f8">Button 1</Button>
      </Grid>
      <Grid item xs={8} sm={3} md={4}>
        <Button variant="contained">Button 2</Button>
      </Grid>
      <Grid item xs={8} sm={3} md={4}>
        <Button variant="contained">Button 3</Button>
      </Grid>
    </Grid>
  );
};

export default ButtonExample;
