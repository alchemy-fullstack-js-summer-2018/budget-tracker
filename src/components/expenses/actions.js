import shortid from 'shortid';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './reducersExpenses';
import { addExpense, updateExpense, removeExpense } from '../../services/categoriesApi';

export const add = expense => {
  expense.key = shortid.generate();
  expense.timestamp = new Date().toLocaleString();
  return ({
    type: EXPENSE_ADD,
    payload: addExpense(expense)
  });
};

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: updateExpense(expense)
});

export const remove = expense => ({
  type: EXPENSE_REMOVE,
  payload: removeExpense(expense).then(() => expense)
});