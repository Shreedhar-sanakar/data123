import React, { useReducer, createContext } from "react";
import ContextReducer from "./ContextReducer";

const initialState = [];

export const BudgetTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(ContextReducer, initialState);

  //Action creators
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const addTransaction = () => {
    dispatch({ type: "ADD_TRANSACTION", payload: transactions });
  };
  console.log(transactions);

  return (
    <BudgetTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
      }}
    >
      {children}
    </BudgetTrackerContext.Provider>
  );
};
