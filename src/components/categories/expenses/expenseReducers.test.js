import {
  expenses,
  CATEGORY_LOAD,
  EXPENSE_ADD
} from './expenseReducers';

describe('Expenses reducers', () => {
  it('initializes to an empty array', () => {
    const state = expenses(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads expenses from categories', () => {
    const payload = [
      { key: '1', expenses: [{ name: 'Netflix' }, { name: 'Hulu' }] },
      { key: '2' },
      { key: '3', expenses: [{ name: 'Coffee' }] }
    ];

    const result = [
      { expenses: [{ name: 'Netflix' }, { name: 'Hulu' }], key: '1' },
      { key: '2' },
      { expenses: [{ name: 'Coffee' }], key: '3' }
    ];

    const state = expenses(payload, {
      type: CATEGORY_LOAD,
      payload
    });

    expect(state).toEqual(result);
  });

  it('adds an expense', () => {
    const categories = [
      { key: '1', expenses: [{ name: 'Netflix' }, { name: 'Hulu' }] },
      { key: '2' },
      { key: '3', expenses: [{ name: 'Coffee' }] }
    ];

    const newExpense = [{ name: 'bus', price: 5 }];

    const state = expenses(categories, {
      type: EXPENSE_ADD,
      payload: newExpense
    });
  });
});