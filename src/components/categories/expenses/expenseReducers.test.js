import {
  expenses,
  CATEGORY_LOAD
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
});