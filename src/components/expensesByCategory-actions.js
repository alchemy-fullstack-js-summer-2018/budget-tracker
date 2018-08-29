import { 
  EXPENSE_ADD, 
  EXPENSE_UPDATE,
  EXPENSE_REMOVE 
} from './expensesByCategory-reducers.js';

import { 
  addExpense, 
  updateExpense, 
  removeExpense } from '../services/budgetTrackerApi';
  
export const add = expense => {
  expense.timestamp = (new Date()).toLocaleString();
  return {
    type: EXPENSE_ADD,
    payload: addExpense(expense)
  };
};

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: updateExpense(expense)
});

export const remove = expense => ({
  type: EXPENSE_REMOVE,
  payload: removeExpense(expense).then(() => expense)
});
  