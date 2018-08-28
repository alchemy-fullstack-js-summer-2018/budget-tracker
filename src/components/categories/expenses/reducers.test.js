import {
  expensesByCategory,
  EXPENSE_ADD
} from './reducers';

import {
  CATEGORY_LOAD,
  // CATEGORY_ADD,
  // CATEGORY_REMOVE
} from '../reducers';

describe('expense reducers', () => {
  it('loads a list of expenses', () => {
    const payload = [{ key: 'PPBqWA9', name: 'Rent', expenses: [{ id: 'GQ45', categoryId: 'PPBqWA9', timestamp: '2018-11-10T03:24:00', name: 'Rent Payment', amount: '$500' }] }];

    const state = expensesByCategory([], {
      type: CATEGORY_LOAD,
      payload
    });

    expect(state).toEqual({ 'PPBqWA9': [{ id: 'GQ45', categoryId: 'PPBqWA9', timestamp: '2018-11-10T03:24:00', name: 'Rent Payment', amount: '$500' }] });
  });

  it('adds a new expense', () => {
    const payload = { 
      id: 'BLFK', 
      categoryId: 'PPBqWA9', 
      timestamp: '2018-11-10T03:24:00', 
      name: 'Reapir', 
      amount: '$23' 
    };

    const state = {
      'PPBqWA9': [
        { id: 'GQ45', 
          categoryId: 'PPBqWA9', 
          timestamp: '2018-11-10T03:24:00', 
          name: 'Rent Payment', 
          amount: '$500' }] 
    };

    const newState = expensesByCategory(state, {
      type: EXPENSE_ADD,
      payload
    });
    console.log('***STATE***', newState);
    expect(newState[payload.categoryId]).toEqual([...state[payload.categoryId], payload]);
  });
});