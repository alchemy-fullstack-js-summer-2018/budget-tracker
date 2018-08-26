import { EXPENSE_ADD } from './expenseReducers';
import shortid from 'shortid';

export const addExpense = (categoryId, expense) => {
  expense.id = shortid.generate();
  expense.timestamp = (new Date()).toLocaleString();
  expense.categoryId = categoryId;
  console.log(expense);
  return {
    type: EXPENSE_ADD,
    payload: {
      ...expense
    }
  };
};