import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from './category-reducers';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';


export const getExpensesByCategories = state => state.expensesByCategory;
export const getExpensesByCategoryId = (state, categoryId) => getExpensesByCategories(state)[categoryId];


export function expenses(state = [], { type, payload }) {
  switch(type) {

    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.id] = category.expense;
        return map;
      }, 
      {});
    case CATEGORY_ADD:
      return {
        ...state,
        [payload.id]: []
      };

    case CATEGORY_REMOVE: {
      state[payload];
      return state;
    }

    case EXPENSE_ADD:
      return {
        ...state,
        [payload.categoryId]: [
          ...state[payload.categoryId],
          payload.expense
        ]
      };
    case EXPENSE_UPDATE:
      return state.map(expense => expense.name === payload.name ? payload : expense);
    case EXPENSE_REMOVE:
      return state.filter(expense => expense.name !== payload);
    default:
      return state;
  }
}
