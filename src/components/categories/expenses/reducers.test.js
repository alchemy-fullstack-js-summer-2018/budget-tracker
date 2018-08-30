import {
  expensesByCategory,
  EXPENSE_ADD,
  EXPENSE_REMOVE,
  EXPENSE_UPDATE
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
    expect(newState[payload.categoryId]).toEqual([...state[payload.categoryId], payload]);
  });
  
  it('removes an expense', () => {
    const state = {
      'PPBqWA9': [
        { key: 'GQ45', 
          categoryId: 'PPBqWA9', 
          timestamp: '2018-11-10T03:24:00', 
          name: 'Rent Payment', 
          amount: '$500' },
        { key: 'BNx2', 
          categoryId: 'PPBqWA9', 
          timestamp: '2018-11-10T03:24:00', 
          name: 'Reapir', 
          amount: '$20' }] 
    };
    const payload = { 
      key: 'BNx2', 
      categoryId: 'PPBqWA9', 
      timestamp: '2018-11-10T03:24:00', 
      name: 'Reapir', 
      amount: '$20' 
    };
      
    const newState = expensesByCategory(state, {
      type: EXPENSE_REMOVE,
      payload
    });
    expect(newState[payload.categoryId].length).toBe(1);
  });

  it('updates an expense', () => {
    const state = {
      'PPBqWA9': [
        { key: 'GQ45', 
          categoryId: 'PPBqWA9', 
          timestamp: '2018-11-10T03:24:00', 
          name: 'Rent Payment', 
          amount: '$500' },
        { key: 'BNx2', 
          categoryId: 'PPBqWA9', 
          timestamp: '2018-11-10T03:24:00', 
          name: 'Reapir', 
          amount: '$20' }] 
    };
    const payload = { 
      key: 'BNx2', 
      categoryId: 'PPBqWA9', 
      timestamp: '2018-11-10T03:24:00', 
      name: 'Fixed Shower', 
      amount: '$60' 
    };

    const newState = expensesByCategory(state, {
      type: EXPENSE_UPDATE,
      payload
    });

    expect(newState[payload.categoryId].length).toBe(2);
    expect(newState[payload.categoryId][1]).toBe(payload);
  });

});