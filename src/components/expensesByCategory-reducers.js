export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

export const getExpensesByCategories = state => state.expensesByCategory;
export const getExpensesByCategoryId = (state, categoryId) => getExpensesByCategories(state)[categoryId];

//Need to add category load


export function expenses(state = [], { type, payload }) {
  switch(type) {
    case EXPENSE_ADD:
      return [
        ...state,
        payload
      ];
    case EXPENSE_UPDATE:
      return state.map(expense => expense.name === payload.name ? payload : expense);
    case EXPENSE_REMOVE:
      return state.filter(expense => expense.name !== payload);
    default:
      return state;
  }
}
