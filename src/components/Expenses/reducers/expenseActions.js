import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './expenseReducers';
import { addExpense, updateExpense, removeExpense } from '../../../services/budgetApi';

export const add = (expense) => {
  expense.timestamp = new Date();
  return {
    type: EXPENSE_ADD,
    payload: addExpense(expense)
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