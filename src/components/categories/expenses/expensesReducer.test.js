import {
  expenses
} from './expensesReducer';

describe('Expenses reducers', () => {
  it('initializes to an empty array', () => {
    const state = expenses(undefined, {});
    expect(state).toEqual([]);
  });
});