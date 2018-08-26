import { expenses, EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './ExpenseReducers';

describe('Expense reducers test', () => {
  it('Initializes an empty array', () => {
    const state = expenses(undefined, {});
    expect(state).toEqual([]);
  });

  it('Adds an expense', () => {
    const expense1 = { name: '1' };
    const expense2 = { name: '2' };
    const expense3 = { name: '3' };

    const state = expenses([expense1, expense2], {
      type: EXPENSE_ADD,
      payload: expense3
    });

    expect(state).toEqual([expense1, expense2, expense3]);
  });

  
  it('Updates a expense', () => {
    const expense1 = { id: '1', name: 'a' };
    const expense2 = { id: '2', name: 'b' };
    const expense3 = { id: '3', name: 'c' };

    const updated = { id: '2', name: 'f' };

    const state = expenses([expense1, expense2, expense3], {
      type: EXPENSE_UPDATE,
      payload: updated
    });

    expect(state).toEqual([expense1, updated, expense3]);
  });

  it('Removes an expense', () => {
    const expense1 = { id: '1', name: 'a' };
    const expense2 = { id: '2', name: 'b' };
    const expense3 = { id: '3', name: 'c' };

    const state = expenses([expense1, expense2, expense3], {
      type: EXPENSE_REMOVE,
      payload: '2'
    });

    expect(state).toEqual([expense1, expense3]);
  });
});