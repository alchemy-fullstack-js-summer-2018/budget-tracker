import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from '../categoryReducers';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';

export const getExpenses = state => state.expenses;
export const getExpensesByCategoryId = (state, id) => getExpenses(state)[id];

// const convertObjectToArray = obj => {
//   return obj
//     ? Object.keys(obj).map(key => {
//       const each = obj[key];
//       each.key = key;
//       return each;
//     })
//     : [];
// };

export function expenses(state = [], { type, payload }) {
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
      // const { [payload]: ignore, ...rest } = state;
      // return rest;
      const copy = { ...state };
      delete copy[payload.key];
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