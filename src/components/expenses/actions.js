import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './reducers';
import { addExpense, updateExpense, removeExpense } from '../../services/budgetApi';
import shortid from 'shortid';

export const add = (categoryId, expense) => {
  expense.key = shortid.generate();
  expense.timestamp = new Date();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: addExpense(expense)
  };
};

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: updateExpense(expense)
});

export const remove = (expense) => ({
  type: EXPENSE_REMOVE,
  payload: removeExpense(expense).then(() => expense)
});