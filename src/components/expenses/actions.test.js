import { addExpense, updateExpense, removeExpense } from './actions';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_DELETE } from './reducers';

describe('Expense actions', () => {

  it.skip('Adds an expense', () => {
    const expense = { name: 'Snacks', price: 50 };
    const action = addExpense(expense);

    expect(action).toEqual({ payload: expense, type: EXPENSE_ADD });
  });

  it('Updates an expense', () => {
    const expense = { name: 'Snacks & Nuts', price: 70 };
    const action = updateExpense(expense);

    expect(action).toEqual({ payload: expense, type: EXPENSE_UPDATE });
  });

  it('Removes an expense', () => {
    const expense = { name: 'Snacks', price: 70 };
    const action = removeExpense(expense);

    expect(action).toEqual({ payload: expense, type: EXPENSE_DELETE });
  });

});