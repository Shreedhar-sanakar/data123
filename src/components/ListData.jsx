import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Slide,
} from "@mui/material";
import { Delete, MoneyOff } from "@mui/icons-material";
import { BudgetTrackerContext } from "../context/Context";

const useStyles = makeStyles({
  avatarIncome: {
    color: "#fff",
    backgroundColor: "yellowgreen !important",
  },
  avatarExpense: {
    color: "red",
    backgroundColor: "orangered !important",
  },
  list: {
    maxHeight: "150px",
    overflow: "auto",
  },
});

const ListData = () => {
  const classes = useStyles();
  const { deleteTransactions, transactions  } = useContext(BudgetTrackerContext);
  console.log(transactions, "from list data");
  
  return (
    <List dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </List>
  );
};

export default ListData;
