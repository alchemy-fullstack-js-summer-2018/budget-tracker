export const EXPENSE_ADD = 'EXPENSE_LOAD';

export const getExpensesById = state => state.map(cat => cat.expenses);

export function expenses(state = [], { type, payload }) {
  switch(type) {
    case EXPENSE_ADD:
      return [
        ...state,
        payload
      ];
    default:
      return state.expenses;
  }
}