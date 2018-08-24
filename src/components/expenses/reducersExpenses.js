export const EXPENSE_LOAD = 'EXPENSE_LOAD';
export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

export const getExpenses = state => state.expenses;

export function expenses(state = [], { type }) {
  switch(type) {
    case EXPENSE_LOAD:
      return {
      
      };
    default:
      return state;
  }
}
