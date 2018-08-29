import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from '../reducers';
export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';

export const getExpenses = state => state.expensesByCategory;
export const getExpensesById = (state, id) => getExpenses(state)[id];

export const getTotalExpenses = state => state.totalExpensesByCategory;
export const getTotalExpensesByCategoryId = (state, id) => getTotalExpenses(state)[id];

export function expensesByCategory(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.key] = category.expenses;
        return map;
      }, {});
    case CATEGORY_ADD:
      return {
        ...state,
        [payload.key]: []
      };
    case CATEGORY_REMOVE: {
      delete state[payload];
      return state;
    }
    case EXPENSE_ADD: 
      return {
        ...state,
        [payload.categoryId]: [
          ...state[payload.categoryId],
          payload
        ]
      };
    case EXPENSE_REMOVE:
      return {
        ...state,
        [payload.categoryId]: state[payload.categoryId].filter(expense => expense.key !== payload.key)
      };
    case EXPENSE_UPDATE:
      return {
        ...state,
        [payload.categoryId]: state[payload.categoryId].map(expense => expense.key === payload.key ? payload : expense)
      };
    default:
      return state;
  }
}

export function totalExpensesByCategory(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.key] = parseInt(category.expenses.map(expense => expense.amount).reduce((acc, cur) => parseInt(acc) + parseInt(cur)));
        return map;
      }, {});
    case EXPENSE_ADD: 
      // return state;
      // console.log('**STATE**', state);
      // console.log('**PAYLOAD**', payload);
      return {
        ...state,
        [payload.categoryId] : state[payload.categoryId] + parseInt(payload.amount),

      };
    default:
      return state;
  }
}