import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from '../../reducers/reducers';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

export const getExpensesByCategories = state => state.expensesByCategory;
export const getExpensesByCategoryId = (state, categoryId) => getExpensesByCategories(state)[categoryId];


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
      // JavaScript Blackbelt tricks:
      // const { [payload]: ignore, ...rest } = state;
      // return rest;
      const copy = { ...state };
      delete copy[payload];
      return copy;
    } 
    case EXPENSE_ADD:
      return {
        ...state,
        [payload.categoryId]: [
          ...state[payload.categoryId],
          payload
        ]
      };
    case EXPENSE_UPDATE:
      return {
        ...state,
        [payload.categoryId]: state[payload.categoryId].map(expense => expense.id === payload.id ? payload : expense)
      };
    case EXPENSE_REMOVE:
      return {
        ...state,
        [payload.categoryId]: state[payload.categoryId].filter(expense => expense.key !== payload.key)
      };
    default:
      return state;
  }
}
