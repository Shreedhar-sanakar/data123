import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ListData from "./ListData";

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  // expand: {
  //   transform: 'rotate(0deg)',
  //   marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cartContent: {
    paddingTop: 0,
  },
  divider: {
    margin: "20px 0",
  },
});

const DataGrid = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title="Budget Tracker"
        subheader="Speak financials fluently"
      />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance ₹1000
        </Typography>
        <Typography
          variant="subtitle"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          {/* {Infocard} */}
        </Typography>
        <Divider />
      </CardContent>

      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ListData />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DataGrid;
