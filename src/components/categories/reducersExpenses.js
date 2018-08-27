import { CATEGORY_LOAD } from './reducers';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';


export const getExpensesByCategory = state => state.expensesByCategory;
export const getExpenses = state => state.expenses;

export function expensesByCategory(state = [], { type, payload }) {
  //let expense = {};

  switch(type) {
    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.id] = category.expense;
        return map;
      }, {});

    default:
      return state;
  }
}

export function expenses(state = [], { type, payload }) {
  switch(type) {
    case EXPENSE_ADD:
      return {
        ...state,
        payload: payload 
      };
      // case EXPENSE_UPDATE:
      //   return state.map(expense => expense.id === payload.id ? payload : expense);
  }
}