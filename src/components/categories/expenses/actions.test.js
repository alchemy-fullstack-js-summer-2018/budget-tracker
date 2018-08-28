jest.mock('../../../services/categoriesApi', () => ({
  addExpenseToCategory: jest.fn(),
  updateExpenseInCategory: jest.fn(),
  removeExpenseFromCategory: jest.fn()
}));

import { updateExpense, removeExpense, addExpense } from './actions';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './reducers';
import { addExpenseToCategory, updateExpenseInCategory, removeExpenseFromCategory } from '../../../services/categoriesApi';

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
  const expense = { 'id': 'TT8c', 'name': 'repair', 'categoryId': category.key, 'timeEntered': '1995-12-17T03:24:00', 'amount': '$50' };

  it('should run the add action', () => {
    const promise = Promise.resolve();
    addExpenseToCategory.mockReturnValueOnce(promise);

    const { type, payload } = addExpense(category.key, expense);
    expect(type).toBe(EXPENSE_ADD);
    expect(payload).toBe(promise);
    expect(addExpenseToCategory.mock.calls.length).toBe(1);
    expect(addExpenseToCategory.mock.calls[0][0]).toBe(category.key);
    expect(addExpenseToCategory.mock.calls[0][1]).toBe(expense);
  });

  it('should run the update action', () => {
    const promise = Promise.resolve();
    const updatedExpense = {
      id: 'GQ45',
      categoryId: 'PPBqWA9',
      timestamp: '2018-11-10T03:24:00',
      name: 'Housing',
      amount: '$300',
    };
    updateExpenseInCategory.mockReturnValueOnce(promise);

    const { type, payload } = updateExpense(updatedExpense);
    expect(type).toBe(EXPENSE_UPDATE);
    expect(payload).toBe(promise);
    expect(updateExpenseInCategory.mock.calls.length).toBe(1);
    expect(updateExpenseInCategory.mock.calls[0][0]).toBe(category.key);
    expect(updateExpenseInCategory.mock.calls[0][1]).toBe(updatedExpense);
  });

  it('should run the remove action', () => {
    const promise = Promise.resolve();
    removeExpenseFromCategory.mockReturnValueOnce(promise);

    const { type, payload } = removeExpense(expense);
    expect(type).toBe(EXPENSE_REMOVE);
    expect(payload).toBe(promise);
    expect(removeExpenseFromCategory.mock.calls.length).toBe(1);
    expect(removeExpenseFromCategory.mock.calls[0][0]).toBe(expense.categoryId);
    expect(removeExpenseFromCategory.mock.calls[0][1]).toBe(expense.id);
  });
});