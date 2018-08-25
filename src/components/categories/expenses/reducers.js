import { CATEGORY_LOAD } from '../reducers';
// export const EXPENSE_ADD = 'EXPENSE_LOAD';

export const getExpenses = state => {
  console.log('**GET EXPENSES**', state);
  state.expenses;
};
export const getExpensesById = (state, id) => {
  console.log(state);
  getExpenses(state)[id];
};

export function expensesByCategory(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.key] = category.expenses;
        return map;
      }, {});
    default:
      return state;
  }
}