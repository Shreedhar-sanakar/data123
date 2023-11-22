import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { BudgetTrackerContext } from "../context/Context";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles({
  button: {
    textAlign: "center",
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialState = {
  amount: "",
  category: "",
  type: "Personal",
  budgetType: "Income",
  desc: "",
  date: new Date(),
};

const BudgetForm = ({ budgetType }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(BudgetTrackerContext);
  useEffect(() => {
    setFormData({ ...formData, budgetType: budgetType });
  }, [budgetType]);

  console.log(formData, "from form");

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setFormData(initialState);
  };

  const [openAlert, setOpenAlert] = React.useState(false);
  const handleClick = () => {
    setOpenAlert(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>{budgetType}</InputLabel>
            <Input
              type="number"
              startAdornment={
                <InputAdornment position="start">₹​</InputAdornment>
              }
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <MenuItem value="Office">Office</MenuItem>
              <MenuItem value="Personal">Personal</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Categories</InputLabel>
            <Select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Salary">Salary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="datetime-local"
            fullWidth
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Description</InputLabel>
          <TextField
            type="text"
            fullWidth
            value={formData.desc}
            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} className={classes.button}>
          <Button
            variant="outlined"
            fullWidth
            style={{ color: "green", backgroundColor: "lightgreen" }}
            onClick={createTransaction}
          >
            Create
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Data added
        </Alert>
      </Snackbar>
    </>
  );
};

export default BudgetForm;
