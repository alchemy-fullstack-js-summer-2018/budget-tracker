jest.mock('../../../services/categoriesApi', () => ({
  addExpenseToCategory: jest.fn(),
  updateExpenseInCategory: jest.fn(),
  removeExpenseInCategory: jest.fn()
}));

import { add, update, remove } from './expenseActions';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './expenseReducers';
import { addExpenseToCategory, updateExpenseInCategory, removeExpenseInCategory } from '../../../services/categoriesApi';

describe('Expense actions', () => {
  it('adds an expense', () => {
    const expense = { timestamp: new Date(), name: 'bus', price: 5 };
    const categoryId = 'jkl';
    const promise = Promise.resolve();
    addExpenseToCategory.mockReturnValueOnce(promise);

    const { type, payload } = add(categoryId, expense);
    expect(type).toBe(EXPENSE_ADD);
    expect(payload).toBe(promise);
    expect(addExpenseToCategory.mock.calls.length).toBe(1);
    expect(addExpenseToCategory.mock.calls[0][0]).toBe(categoryId);
    expect(addExpenseToCategory.mock.calls[0][1]).toBe(expense);
  });

  it('updates an expense', () => {
    const expense = { categoryId: 'jkl', timestamp: new Date(), name: 'bus', price: 5 };
    const promise = Promise.resolve();
    updateExpenseInCategory.mockReturnValueOnce(promise);

    const { type, payload } = update(expense);
    expect(type).toBe(EXPENSE_UPDATE);
    expect(payload).toBe(promise);
    expect(updateExpenseInCategory.mock.calls.length).toBe(1);
    expect(updateExpenseInCategory.mock.calls[0][0]).toBe(expense.categoryId);
    expect(updateExpenseInCategory.mock.calls[0][1]).toBe(expense);
  });

  it('removes an expense', () => {
    const expense = { categoryId: 'jkl', timestamp: new Date(), name: 'bus', price: 5 };
    const promise = Promise.resolve();
    removeExpenseInCategory.mockReturnValueOnce(promise);

    const { type, payload } = remove(expense);
    expect(type).toBe(EXPENSE_REMOVE);
    expect(payload).toEqual(promise);
    expect(removeExpenseInCategory.mock.calls.length).toBe(1);
    expect(removeExpenseInCategory.mock.calls[0][0]).toBe(expense.categoryId);
  });
});