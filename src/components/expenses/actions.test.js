import { add, update, remove } from './actions';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_DELETE } from './reducers';

describe.skip('Expense actions', () => {

  it('Adds an expense', () => {
    const expense = { name: 'Snacks', price: 50 };
    const action = add('123', expense);

    expect(action).toEqual({ payload: expense, type: EXPENSE_ADD });
  });

  it('Updates an expense', () => {
    const expense = { name: 'Snacks & Nuts', price: 70 };
    const action = update(expense);

    expect(action).toEqual({ payload: expense, type: EXPENSE_UPDATE });
  });

  it('Removes an expense', () => {
    const expense = { name: 'Snacks', price: 70 };
    const action = remove(expense);

    expect(action).toEqual({ payload: expense, type: EXPENSE_DELETE });
  });

});