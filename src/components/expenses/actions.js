import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_DELETE } from './reducers';
import shortid from 'shortid';

export const addExpense = (categoryId, expense) => {
  expense.id = shortid.generate();
  expense.timestamp = new Date();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: {
      categoryId,
      expense
    }
  };
};

export const updateExpense = expense => ({
  type: EXPENSE_UPDATE,
  payload: expense
});

export const removeExpense = expense => ({
  type: EXPENSE_DELETE,
  payload: expense
});
