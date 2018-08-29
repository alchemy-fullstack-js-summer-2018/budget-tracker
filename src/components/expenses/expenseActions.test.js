jest.mock('../../services/budgetApi', () => ({
  addExpense: jest.fn(),
  updateExpense: jest.fn()
}));

import { add, update, remove } from './expenseActions';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './expensesReducers';
import { addExpense, updateExpense } from '../../services/budgetApi';


describe('expense actions', () => {

  it('adds expense', () => {
    const expense = { name: 'cups' };
    const categoryId = '123';
    const promise = Promise.resolve();
    addExpense.mockReturnValueOnce(promise);

    const { type, payload } = add(categoryId, expense);
    expect(type).toBe(EXPENSE_ADD);
    expect(payload).toBe(promise);
    expect(addExpense.mock.calls.length).toBe(1);
    expect(addExpense.mock.calls[0][0]).toBe(expense);
  });

  it('updates expense', () => {
    const expense = { name: 'plates' };
    const promise = Promise.resolve();
    updateExpense.mockReturnValueOnce(promise);

    const { type, payload } = update(expense);
    expect(type).toBe(EXPENSE_UPDATE);
    expect(payload).toBe(promise);
    expect(updateExpense.mock.calls.length).toBe(1);
    expect(updateExpense.mock.calls[0][0]).toBe(expense);
  });

  it('removes expense', () => {
    const payload = {};
    const action = {
      type: EXPENSE_REMOVE,
      payload
    };
    expect(remove(payload).type).toEqual(action.type);
  });
});