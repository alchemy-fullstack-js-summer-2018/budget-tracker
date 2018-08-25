import { CATEGORY_LOAD } from './reducers';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

// TODO: 
// Category load
// Category add
// Category delete

export const getExpensesByCategories = state => state.expensesByCategory;
export const getExpenses = state => state.expenses;

export function expensesByCategory(state = [], { type, payload }) {
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
