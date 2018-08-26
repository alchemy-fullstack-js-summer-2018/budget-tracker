import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './expenseReducers';
import shortid from 'shortid';

export const addExpense = expense => {
  console.log('***addExpense***', expense);
  expense.id = shortid.generate();
  expense.timestamp = new Date();
  return {
    type: EXPENSE_ADD,
    payload: expense
  };
};

export const updateExpense = expense => ({
  type: EXPENSE_UPDATE,
  payload: expense
});

export const removeExpense = id => ({
  type: EXPENSE_REMOVE,
  payload: id
});