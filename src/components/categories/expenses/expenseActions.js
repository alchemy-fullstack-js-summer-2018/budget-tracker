import { EXPENSE_ADD, EXPENSE_REMOVE } from './expenseReducers';
import shortid from 'shortid';

export const add = (categoryId, expense) => {
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

export const remove = expense => ({
  type: EXPENSE_REMOVE,
  payload: expense
});