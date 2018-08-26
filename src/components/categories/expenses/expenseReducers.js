import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from '../reducers';
export const EXPENSE_ADD = 'EXPENSE_ADD';

export const getExpenses = state => state.expensesByCategory;
export const getExpensesById = (state, id) => getExpenses(state)[id];

export function expensesByCategory(state = [], { type, payload }) {
  // console.log('**STATE**', state);
  // console.log('**PAYLOAD**', payload);
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
    case CATEGORY_REMOVE:{
      delete state[payload];
      return state;
    }
    case EXPENSE_ADD: 
      return state;
    default:
      return state;
  }
}