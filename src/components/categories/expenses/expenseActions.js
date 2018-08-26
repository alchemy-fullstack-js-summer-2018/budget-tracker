import { EXPENSE_ADD } from './expenseReducer';
import shortid from 'shortid';

export const addExpense = (categoryId, expense) => {
  expense.id = shortid.generate();
  expense.timestamp = (new Date()).toLocaleString();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: {
      categoryId,
      expense
    }
  };
};