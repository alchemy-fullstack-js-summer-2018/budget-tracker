import { expenses } from './expensesByCategory';

describe('Expense Reducers', () => {

  it('initializes to an empty array', () => {
    const state = expenses(undefined, {});
    expect(state).toEqual([]);
  });
});