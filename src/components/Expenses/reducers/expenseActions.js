import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './expenseReducers';
import { addExpense, updateExpense, removeExpense } from '../../../services/budgetApi';
// import shortid from 'shortid';

export const add = (categoryId, expense) => {
  return {
    type: EXPENSE_ADD,
    payload: addExpense(categoryId, expense)
  };
};

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: updateExpense(expense)
});

//TODO: payload: removeCategory(id).then(() => id) ?
export const remove = expense => ({
  type: EXPENSE_REMOVE,
  payload: removeExpense(expense)
});