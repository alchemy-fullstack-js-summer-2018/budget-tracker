import { CATEGORY_LOAD } from '../categories/reducers';
export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

export const getExpenses = state => state.expenses;
export const getExpensesById = (categoryKey, state) => getExpenses(state)[categoryKey];

export function expenses(state = [], { type, payload }) {
  switch(type) {
    case EXPENSE_ADD:
      return [
        ...state,
        payload
      ];
    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.key] = category.expenses;
        return map;
      }, {});
    case EXPENSE_UPDATE:
      for(var i in state[payload.categoryId]) {
        if(state[payload.categoryId][i].key == payload.key) {
          state[payload.categoryId][i].name = payload.name;
          state[payload.categoryId][i].price = payload.price;
          break;
        }
      }
      return state;

    case EXPENSE_REMOVE:
      return;
    default:
      return state;
  }
}
