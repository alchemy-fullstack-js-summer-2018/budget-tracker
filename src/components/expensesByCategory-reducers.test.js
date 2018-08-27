import {
  expenses,
  EXPENSE_ADD,
  EXPENSE_UPDATE,
  EXPENSE_REMOVE
} from './expensesByCategory-reducers';

describe('expenses reducers', () => {


  it('adds expense', () => {
    const expense1 = { name: 'Coffee' };
    const expense2 = { name: 'Slice of Pizza' };
    const expense3 = { name: 'Croissant' };

    const state = expenses([expense1, expense2], {
      type: EXPENSE_ADD,
      payload: expense3
    });

    expect(state).toEqual([expense1, expense2, expense3]);

  });

  it('updates an expense', () => {
    const expense1 = { name: 'Coffee', amount: '3.00' };
    const expense2 = { name: 'Slice of Pizza', amount: '3.75' };
    const expense3 = { name: 'Croissant', amount: '2.50' };

    const updated = { name: 'Sausage Biscuit', amount: '2.25' };

    const state = expenses([expense1, expense2, expense3], {
      type: EXPENSE_UPDATE,
      payload: updated
    });

    expect(state).toEqual([
      expense1,
      updated,
      expense3
    ]);

  });

  it('removes a category', () => {
    const expense1 = { name: 'Coffee', amount: '3.00' };
    const expense2 = { name: 'Slice of Pizza', amount: '3.75' };
    const expense3 = { name: 'Croissant', amount: '2.50' };

    const state = expenses([expense1, expense2, expense3], {
      type: EXPENSE_REMOVE,
      payload: '2'
    });

    expect(state).toEqual([
      expense1,
      expense3
    ]);
  });
});