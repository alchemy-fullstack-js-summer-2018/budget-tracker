import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_DELETE } from './reducers';
// import shortid from 'shortid';
import { addExpense, updateExpense, removeExpense } from '../../services/categoriesApi';

export const add = expense => {
  // expense.id = shortid.generate();
  expense.timestamp = new Date();
  return ({
    type: EXPENSE_ADD,
    payload: 
      addExpense(expense)
  });
};

export const update = expense => {
  return ({
    type: EXPENSE_UPDATE,
    payload: updateExpense(expense.categoryId, expense)
  });
};

export const remove = expense => ({
  type: EXPENSE_DELETE,
  payload: removeExpense(expense.categoryId, expense.id).then(() => expense)
});
