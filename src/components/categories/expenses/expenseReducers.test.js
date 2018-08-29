import {
  expenses,
  CATEGORY_LOAD,
  EXPENSE_ADD,
  EXPENSE_REMOVE,
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

  it('adds an expense to a category', () => {
    const payload = { categoryId: '1', name: 'Showtime' };
    const state = { '1': [{ name: 'Netflix' }, { name: 'Hulu'  }] };

    const result = expenses(state, {
      type: EXPENSE_ADD,
      payload
    });

    expect(result[payload.categoryId]).toEqual([...state[payload.categoryId], payload]);
  });

  it('removes an expense from a category', () => {
    const state = { 
      '1': [
        { name: 'Netflix', key: 'abv' },
        { name: 'Hulu', key: 'jkl' },
        { name: 'Showtime', key: 'iup' }
      ]
    };
    const payload = { categoryId: '1', name: 'Showtime', key: 'iup' };

    const result = expenses(state, {
      type: EXPENSE_REMOVE,
      payload
    });

    expect(result[payload.categoryId].length).toBe(2);
  });
});