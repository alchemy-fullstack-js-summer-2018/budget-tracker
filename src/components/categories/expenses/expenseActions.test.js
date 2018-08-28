jest.mock('../../../services/categoriesApi', () => ({
  addExpenseToCategory: jest.fn(),
  updateExpenseInCategory: jest.fn()
}));

import { add, update } from './expenseActions';
import { EXPENSE_ADD, EXPENSE_UPDATE } from './expenseReducers';
import { addExpenseToCategory, updateExpenseInCategory } from '../../../services/categoriesApi';

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
    expect(updateExpenseInCategory.mock.calls[0][0]).toBe(expense);
  });
});