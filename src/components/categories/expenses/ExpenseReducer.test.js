import { expensesByCategory } from './ExpenseReducers';
import { CATEGORY_ADD } from '../reducers';

describe('Expense reducers test', () => {
  it('Initializes an empty array', () => {
    const state = expensesByCategory(undefined, {});
    expect(state).toEqual([]);
  });

  it('Adds an expense for CATEGORY_ADD', () => {
    // const expense1 = { id: 123, categoryId: 444, name: 'car', price: 200 };
    // const expense2 = { id: 555, categoryId: 444, name: 'clothes', price: 100 };

    const state = expensesByCategory({}, { type: CATEGORY_ADD, payload: { key: 123 } });
    expect(state).toEqual({ 123: [] });
  });

  
  // it('Updates a expense', () => {
  //   const expense1 = { id: '1', name: 'a' };
  //   const expense2 = { id: '2', name: 'b' };
  //   const expense3 = { id: '3', name: 'c' };

  //   const updated = { id: '2', name: 'f' };

  //   const state = expenses([expense1, expense2, expense3], {
  //     type: EXPENSE_UPDATE,
  //     payload: updated
  //   });

  //   expect(state).toEqual([expense1, updated, expense3]);
  // });

  // it('Removes an expense', () => {
  //   const expense1 = { id: '1', name: 'a' };
  //   const expense2 = { id: '2', name: 'b' };
  //   const expense3 = { id: '3', name: 'c' };

  //   const state = expenses([expense1, expense2, expense3], {
  //     type: EXPENSE_REMOVE,
  //     payload: '2'
  //   });

  //   expect(state).toEqual([expense1, expense3]);
  // });
});