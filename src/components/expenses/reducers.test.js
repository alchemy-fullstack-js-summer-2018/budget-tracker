import {
  expensesByCategory,
  EXPENSE_ADD,
  EXPENSE_UPDATE,
  // EXPENSE_DELETE
} from './reducers';


describe('Expense Reducers', () => {

  const expense1 = {
    id: 123,
    categoryId: 111,
    name: 'Food',
    price: 200
  };

  const expense2 = {
    id: 456,
    categoryId: 111,
    name: 'Mortgage',
    price: 1000
  };

  it('Has a Default Value of Empty Object', () => {
    const state = expensesByCategory(undefined, {});
    expect(state).toEqual({});
  });

  
  it('Adds an Expense to a Category', () => {
    const state = expensesByCategory({ 111: [expense1] }, {
      type: EXPENSE_ADD,
      payload: {
        categoryId: 111,
        ...expense2
      }
    });
    expect(state).toEqual({ 111: [expense1, expense2] });

  });

  it('Updates an Expense', () => {
    const state = expensesByCategory(
      { 123: [{ id: 456, name: 'Expense', price: 1000 }] },
      { type: EXPENSE_UPDATE, payload: { categoryId: 123, id: 456, name: 'Expense', price: 2000 } });
    expect(state).toEqual({ 123: [{ categoryId: 123, id: 456, name: 'Expense', price: 2000 }] });
  });


  // it('Deletes an Expense', () => {
  //   const state = expensesByCategory(
  //     { 123: [expense1, expense2] }, 
  //     { type: EXPENSE_DELETE, payload: expense2  });
  //   expect(state).toEqual({ 123: [expense1] });
  // });

});
