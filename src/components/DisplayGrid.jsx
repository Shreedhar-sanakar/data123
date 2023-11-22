import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Reports from "./Reports";
import DataGrid from "./DataGrid";

const useStyles = makeStyles({
  grid: {
    display:"flex",
    alignItems:"center",
    justifyItems:"space-between",
    padding:"10px"
  },
  gridItem:{
    padding:"10px"
  }
 
});

const DisplayGrid = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      style={{ height: "calc(100vh - 150px)" }}
      className={classes.grid}
    >
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <Reports title="Income" />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <DataGrid />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <Reports title="Expense" />
      </Grid>
    </Grid>
  );
};

export default DisplayGrid;
