import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from '../reducers';
export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';

export const getExpenses = state => state.expensesByCategory;
export const getExpensesById = (state, id) => getExpenses(state)[id];

export function expensesByCategory(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      console.log('**PAYLOAD expense reducer**', payload);
      // return Object.keys()
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
        [payload.categoryId]: state[payload.categoryId].filter(expense => expense.id !== payload.id)
      };
    case EXPENSE_UPDATE:
      return {
        ...state,
        [payload.categoryId]: state[payload.categoryId].map(expense => expense.id === payload.id ? payload : expense)
      };
    default:
      return state;
  }
}