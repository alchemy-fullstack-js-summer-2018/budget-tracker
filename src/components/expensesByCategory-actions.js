import { 
  EXPENSE_ADD, 
  EXPENSE_UPDATE,
  EXPENSE_REMOVE 
} from './expensesByCategory-reducers.js';

import { 
  addExpenseToCategory, 
  updateExpenseInCategory, 
  removeExpenseFromCategory } from '../services/budgetTrackerApi';
  
export const addExpense = (categoryId, expense) => {
  expense.timestamp = (new Date()).toLocaleString();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: addExpenseToCategory(expense)
  };
};

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: updateExpenseInCategory(expense.categoryId, expense)
});

export const remove = expense => ({
  type: EXPENSE_REMOVE,
  payload: removeExpenseFromCategory(expense.categoryId, expense.key).then(() => expense)
});
  