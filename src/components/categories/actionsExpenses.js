import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './reducersExpenses';
//import data from './categories-data';
//import shortid from 'shortid';

export const addExpense = expense => {
  return {
    type: EXPENSE_ADD,
    payload: expense
  };
};

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: expense
});

export const remove = id => ({
  type: EXPENSE_REMOVE,
  payload: id
});