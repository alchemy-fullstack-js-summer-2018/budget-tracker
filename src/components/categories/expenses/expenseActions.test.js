jest.mock('../../../services/categoriesApi', () => ({
  addExpenseToCategory: jest.fn(),
}));

import { add } from './expenseActions';
import { EXPENSE_ADD } from './expenseReducers';
import { addExpenseToCategory } from '../../../services/categoriesApi';

describe('Expense actions', () => {
  it('adds an expense', () => {
    const expense = { timestamp: new Date(), name: 'bus', price: 5 };
    const categoryId = 'jkl';
    const promise = Promise.resolve();
    addExpenseToCategory.mockReturnValueOnce(promise);
    // const result = { categoryId: 'jkl', timestamp: new Date(), name: 'bus', price: 5 }

    const { type, payload } = add(categoryId, expense);
    expect(type).toBe(EXPENSE_ADD);
    expect(payload).toBe(promise);
    expect(addExpenseToCategory.mock.calls.length).toBe(1);
    expect(addExpenseToCategory.mock.calls[0][0]).toBe(categoryId);
  });
});