import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './expensesByCategory';
// import shortid from 'shortid';

export const addExpense = expense => {
  //category id
  return {
    type: EXPENSE_ADD,
    payload: expense
  };
};

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: expense
});

export const remove = id => ({
  type: EXPENSE_REMOVE,
  payload: id
});