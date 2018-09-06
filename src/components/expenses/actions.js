import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_DELETE } from './reducers';
import { addExpense, updateExpense, removeExpense } from '../../services/categoriesApi';

export const add = expense => {
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
    payload: updateExpense(expense)
  });
};

export const remove = expense => ({
  type: EXPENSE_DELETE,
  payload: removeExpense(expense).then(() => expense)
});
