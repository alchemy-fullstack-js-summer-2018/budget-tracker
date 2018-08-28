import { EXPENSE_ADD, EXPENSE_REMOVE, EXPENSE_UPDATE } from './expenseReducers';
import { addExpenseToCategory, updateExpenseInCategory, removeExpenseInCategory } from '../../../services/categoriesApi';
import shortid from 'shortid';

export const add = (categoryId, expense) => {
  expense.id = shortid.generate();
  expense.timestamp = (new Date()).toLocaleString();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: addExpenseToCategory(categoryId, expense)
  };
};

export const remove = expense => ({
  type: EXPENSE_REMOVE,
  payload: removeExpenseInCategory(expense.categoryId, expense.key)
});

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: updateExpenseInCategory(expense.categoryId, expense)
});