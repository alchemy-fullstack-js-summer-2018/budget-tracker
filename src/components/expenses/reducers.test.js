import {
  expensesByCategory,
  EXPENSE_ADD,
  EXPENSE_UPDATE,
  EXPENSE_REMOVE,
} from './reducers';

import {
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_REMOVE
} from '../categories/reducers';

describe('expense reducers', () => {
  
  it('adds an expense', () => {
    const expenseA = { name: 'A' };
    const expenseB = { name: 'B' };
    const expenseC = { name: 'C' };
    const state = expensesByCategory([expenseA, expenseB], {
      type: EXPENSE_ADD,
      payload: expenseC
    });

    expect(state).toEqual([expenseA, expenseB, expenseC]);
  });

});