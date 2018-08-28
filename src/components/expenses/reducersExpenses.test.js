import {
  expenses,
  // EXPENSE_ADD,
  // EXPENSE_UPDATE,
  // EXPENSE_REMOVE
} from './reducersExpenses';

describe('Expenses Reducers', () => {

  it('Initialize to empty array', () => {
    const state = expenses(undefined, {});
    expect(state).toEqual([]);
  });
  
  it('Adds a expense', () => {

  });

  it('Updates a expense', () => {

  });

  it('Removes a expense', () => {

  });

});