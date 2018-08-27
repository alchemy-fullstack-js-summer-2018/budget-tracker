import { add } from './expenseActions';
import { EXPENSE_ADD } from './expenseReducers';

describe('Expenses actions', () => {
  it('adds an expense', () => {
    const expense = { timestamp: new Date(), name: 'bus', price: 5 };
    const categoryId = 'jkl';
    const action = add(categoryId, expense);
    expect(action).toEqual({
      type: EXPENSE_ADD,
      payload: {
        categoryId,
        expense
      }
    });
  });
});