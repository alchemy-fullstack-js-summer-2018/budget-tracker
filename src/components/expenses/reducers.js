export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_DELETE = 'EXPENSE_DELETE';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from '../categories/reducers';

export const getExpenses = state => state.expensesByCategory;
export const getExpensesByCategoryId = (state, categoryId) => getExpenses(state)[categoryId];

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
      const copy = { ...state };
      delete copy[payload];
      return copy;
    }

    case EXPENSE_ADD:{
      return {
        ...state,
        [payload.categoryId]: [
          ...state[payload.categoryId],
          payload
        ]
      };
    }

    case EXPENSE_UPDATE: {
      const copy = { ...state };
      const update = copy[payload.categoryId].map(expense => expense.id === payload.id ? payload : expense);
      copy[payload.categoryId] = update;
      return copy;
    }


    
    case EXPENSE_DELETE: {
      const copy = { ...state };
      const update = copy[payload.categoryId].filter(expense => expense.key !== payload.key);
      copy[payload.categoryId] = update;
      return copy;
    }
    default: 
      return state;
  }
}