import { addExpense, updateExpense, removeExpense } from './expenseActions';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './expenseReducers';
// updateExpense, removeExpense
// EXPENSE_UPDATE, EXPENSE_REMOVE
describe('actions', () => {

  it('should run the add action', () => {
    const payload = { 'id': 'TT8c', 'name': 'repair', 'timeEntered': '1995-12-17T03:24:00', 'amount': '$50' };
    const categoryId = 'GH5C3';
    const expectedAction = {
      type: EXPENSE_ADD,
      payload
    };
    expect(addExpense(categoryId, payload).type).toEqual(expectedAction.type);
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