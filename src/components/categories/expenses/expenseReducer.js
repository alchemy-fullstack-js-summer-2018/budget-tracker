import { CATEGORY_LOAD, CATEGORY_ADD } from '../categoryReducers';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const getExpenses = state => state.expenses;
export const getExpensesByCategoryId = (state, id) => getExpenses(state)[id];

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
    case EXPENSE_ADD:
      return {
        ...state,
        [payload.categoryId]: [
          ...state[payload.categoryId],
          payload.expense
        ]
      };
    default:
      return state;
  }
}