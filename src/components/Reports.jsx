import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Income: {
    borderBottom: "10px solid rgba(0,255,0,0.5)",
  },
  Expense: {
    borderBottom: "10px solid rgba(255,0,0,0.5)",
  },
});

const Reports = ({ title }) => {
  const classes = useStyles();

  return (
    <Card className={title === "Income" ? classes.Income : classes.Expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$20</Typography>
        {/* <Doughnut data=""/> */}
      </CardContent>
    </Card>
  );
};

export default Reports;
