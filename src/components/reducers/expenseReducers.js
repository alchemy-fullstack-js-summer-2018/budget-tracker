import { CATEGORY_LOAD } from './reducers';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

// TODO: 
// Category load
// Category add
// Category delete

// REF:
// [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
//   return accumulator + currentValue;
// }, 10);

export const getExpenses = state => state.expenses;
export const getExpensesByCategories = state => state.expensesByCategory;

export function expenses(state = [], { type, payload }) {
  let expense = {};

  switch(type) {
    case CATEGORY_LOAD:// on category load, categories should load total expenses...reduce??
      return state.reduce((acc, val) => {
        return acc + val;
      }, {});
    case EXPENSE_ADD: //needs to ref cat id
      return {
        ...state,
        payload: payload  
      };
    case EXPENSE_UPDATE:
      return state.map(expense => expense.id === payload.id ? payload : expense);
    case EXPENSE_REMOVE:
      return state.filter(expense => expense.id !== payload);
    default:
      return state;
  }
}