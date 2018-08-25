export const CATEGORY_LOAD = 'CATEGORY_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';

export const getCategories = state => state.categories;

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload;
    case CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    case CATEGORY_UPDATE:
      return state.map(category => category.key === payload.key ? payload : category);
    case CATEGORY_REMOVE:
      return state.filter(category => category.key !== payload);
    default:
      return state;  
  }  
}

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';


export const getExpenses = state => state.expenses;
export const getExpensesByCategory = state => state.expensesByCategory;

export function expenses(state = [], { type, payload }) {
  let expense = {};

  switch(type) {
    case CATEGORY_LOAD:
      return state.reduce((acc, val) => {
        return acc + val;
      }, {});
    case EXPENSE_ADD:

  }
}