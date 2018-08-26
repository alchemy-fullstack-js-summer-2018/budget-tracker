import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from './reducers';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

export const getExpensesByCategories = state => state.expensesByCategory;
export const getExpensesByCategoryId = (state, categoryId) => getExpensesByCategories(state)[categoryId];

export function expensesByCategory(state = [], { type, payload }) {
  console.log('***PAYLOAD***', payload);
  console.log('***STATE***', state);

  switch(type) {
    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.id] = category.expense;
        return map;
      }, {});
    case CATEGORY_ADD:
      return {
        ...state,
        [payload.id]: []
      };
    case CATEGORY_REMOVE: //update?
      return payload;
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

// TODO: separate concerns
// export const getExpenses = state => state.expenses;
// export function expenses(state = [], { type, payload }) {
//   switch(type) {
//     case EXPENSE_ADD: //needs to ref cat id
//       return {
//         ...state,
//         payload: payload  
//       };
//     case EXPENSE_UPDATE:
//       return state.map(expense => expense.id === payload.id ? payload : expense);
//     case EXPENSE_REMOVE:
//       return state.filter(expense => expense.id !== payload);
//     default:
//       return state;
//   }
// }
