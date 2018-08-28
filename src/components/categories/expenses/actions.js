import { EXPENSE_ADD, EXPENSE_REMOVE, EXPENSE_UPDATE } from './reducers';
import { addExpenseToCategory, updateExpenseInCategory, removeExpenseFromCategory } from '../../../services/categoriesApi';

export const addExpense = (categoryId, expense) => {
  expense.timestamp = (new Date()).toLocaleString();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: addExpenseToCategory(categoryId, expense)
  };
};

export const updateExpense = (expense) => {
  return {
    type: EXPENSE_UPDATE,
    payload: updateExpenseInCategory(expense.categoryId, expense)
  };
};

export const removeExpense = (expense) => {
  console.log('**ACTIONS REMOVE**', expense);
  return {
    type: EXPENSE_REMOVE,
    payload: removeExpenseFromCategory(expense.categoryId, expense.key).then(() => expense)
  };
};