import { addExpense } from './expenseActions';
import { EXPENSE_ADD } from './expenseReducers';
// updateExpense, removeExpense
// EXPENSE_UPDATE, EXPENSE_REMOVE
describe('actions', () => {

  it('should add an expense', () => {
    const payload = { 'id': 'TT8c', 'name': 'repair', 'timeEntered': '1995-12-17T03:24:00', 'amount': '$50' };
    const categoryId = 'GH5C3';
    const expectedAction = {
      type: EXPENSE_ADD,
      payload
    };
    expect(addExpense(categoryId, payload).type).toEqual(expectedAction.type);
  });
});