import { add, update, remove } from './ExpenseActions';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './ExpenseReducers';

describe('Category actions test', () => {
  it('Adds', () => {
    const payload = {};
    const action = add(payload);
    expect(action).toEqual({ type: EXPENSE_ADD, payload: payload });
  });

  it('Updates', () => {
    const action = update(4);
    expect(action).toEqual({ type: EXPENSE_UPDATE,   payload: 4
    });
  });

  it('Removes', () => {
    const action = remove('123');
    expect(action).toEqual({ type: EXPENSE_REMOVE, payload: '123' });
  });
});
