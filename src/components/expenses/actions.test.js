import { add, update, remove } from './actions';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './reducersExpenses';

describe('Category actions', () => {

  it('Adds', () => {
    const expense = { name: 'Dog food', price: 50 };
    const action = add(expense);

    expect(action).toEqual({ payload: expense, type: EXPENSE_ADD });
  });

  it('Updates', () => {
    const expense = { name: 'Dog food', price: 50 };
    const action = update(expense);

    expect(action).toEqual({ payload: expense, type: EXPENSE_UPDATE });
  });

  it('Removes', () => {
    const expense = { name: 'Dog food', price: 50 };
    const action = remove(expense);

    expect(action).toEqual({ payload: expense, type: EXPENSE_REMOVE });
  });

});