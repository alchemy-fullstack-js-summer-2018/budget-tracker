import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_DELETE } from './reducers';
import shortid from 'shortid';
import { addExpense, updateExpense, removeExpense } from '../../services/categoriesApi';

export const add = (categoryId, expense) => {
  expense.id = shortid.generate();
  expense.timestamp = new Date();
  expense.categoryId = categoryId;
  return ({
    type: EXPENSE_ADD,
    payload: 
      addExpense(expense)
  });
};

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: updateExpense(expense)
});

export const remove = expense => ({
  type: EXPENSE_DELETE,
  payload: removeExpense(expense).then(() => expense)
});
