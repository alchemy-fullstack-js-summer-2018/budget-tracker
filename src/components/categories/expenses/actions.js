import { EXPENSE_ADD } from './reducers';
import data from '../categories-data';
import shortid from 'shortid';

export const addExpense = expense => {
  expense.id = shortid.generate();
  expense.timestamp = (new Date()).toLocaleString();
  return {
    type: EXPENSE_ADD,
    payload: expense
  };
};