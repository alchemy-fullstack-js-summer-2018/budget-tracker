import { expenses } from './Expense-reducers';

describe('Expense reducers test', () => {
  it('Initializes an empty array', () => {
    const state = expenses(undefined, {});
    expect(state).toEqual([]);
  });
});