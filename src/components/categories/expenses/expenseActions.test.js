import { add, remove } from './expenseActions';
import { EXPENSE_ADD, EXPENSE_REMOVE } from './expenseReducers';

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

  it('removes an expense', () => {
    const expense = { timestamp: new Date(), name: 'bus', price: 5 };
    const action = remove(expense);
    expect(action).toEqual({
      type: EXPENSE_REMOVE,
      payload: expense
    });
  });
});