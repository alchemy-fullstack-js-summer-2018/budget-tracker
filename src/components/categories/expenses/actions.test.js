jest.mock('../../../services/categoriesApi', () => ({
  addExpenseToCategory: jest.fn()
}));

import { updateExpense, removeExpense, addExpense } from './actions';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './reducers';
import { addExpenseToCategory } from '../../../services/categoriesApi';

describe('actions', () => {
  const category =   
  { key: 'PPBqWA9', 
    name: 'Rent', 
    timeStamp: '2095-12-17T03:24:00', 
    budget: 500,
    expenses: [
      {
        id: 'GQ45',
        categoryId: 'PPBqWA9',
        timestamp: '2018-11-10T03:24:00',
        name: 'Rent Payment',
        amount: '$500',
      }
    ] };

  it.only('should run the add action', () => {
    const promise = Promise.resolve();
    const expense = { 'id': 'TT8c', 'name': 'repair', 'categoryId': category.key, 'timeEntered': '1995-12-17T03:24:00', 'amount': '$50' };
    addExpenseToCategory.mockReturnValueOnce(promise);

    const { type, payload } = addExpense(category.key, expense);
    expect(type).toBe(EXPENSE_ADD);
    expect(payload).toBe(promise);
    expect(addExpenseToCategory.mock.calls.length).toBe(1);
    expect(addExpenseToCategory.mock.calls[0][0]).toBe(category.key);
    expect(addExpenseToCategory.mock.calls[0][1]).toBe(expense);
  });

  it('should run the update action', () => {
    const payload = { 'id': 'TT8c', 'categoryId': 'GH5C3', 'name': 'repair', 'timeEntered': '1995-12-17T03:24:00', 'amount': '$50' };
    const expectedAction = {
      type: EXPENSE_UPDATE,
      payload
    };
    expect(updateExpense(payload).type).toEqual(expectedAction.type);
  });

  it('should run the remove action', () => {
    const payload = { 'id': 'TT8c', 'categoryId': 'GH5C3', 'name': 'repair', 'timeEntered': '1995-12-17T03:24:00', 'amount': '$50' };
    const expectedAction = {
      type: EXPENSE_REMOVE,
      payload
    };
    expect(removeExpense(payload).type).toEqual(expectedAction.type);
  });
});