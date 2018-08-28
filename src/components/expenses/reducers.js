export const EXPENSE_LOAD = 'EXPENSE_LOAD';
export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from '../categories/reducers';

export const getExpensesByCategoryId = (state, id) => state.expensesByCategory[id];

export function expensesByCategory(state = {}, { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD: {
      console.log('STATE', state);
      console.log('PAYLOAD', payload);

      return Object.keys(payload).forEach(key => {
        payload[key] = payload[key].expenses || [];
      });
    }
    case CATEGORY_ADD:
      return {
        ...state,
        [payload.id]: []
      };
    case CATEGORY_REMOVE: {
      // eslint-disable-next-line
      const { [payload]: ignore, ...rest } = state;
      return rest;
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
        [payload.categoryId]: state[payload.categoryId].filter(expense => expense.id !== payload.id)
      };
    default:
      return state;
  }
}