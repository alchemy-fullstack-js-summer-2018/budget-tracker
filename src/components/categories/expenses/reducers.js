export const EXPENSE_ADD = 'EXPENSE_LOAD';

export const getExpensesById = state => state.expenses;

export function expensesByCategory(state, { type, payload }) {
  switch(type) {
    case EXPENSE_ADD:
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}