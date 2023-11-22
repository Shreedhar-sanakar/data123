//Reducer is a function that takes in the old state, and an action to return new state
let transactions;
const ContextReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      return transactions;

    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);
      return transactions;

    default:
      return state;
  }
};

export default ContextReducer;
