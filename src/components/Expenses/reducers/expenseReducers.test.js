// import { 
//   expenses,
//   EXPENSE_ADD,
//   EXPENSE_UPDATE,
//   EXPENSE_REMOVE } from './expenseReducers';
// import { 
// /* categories,
//   CATEGORY_LOAD, */
// /*  CATEGORY_ADD, */
// /* CATEGORY_REMOVE */  } from './reducers';


describe('Expense Reducers', () => {

  // it('initializes to an empty array', () => {
  //   const state = expenses(undefined, {});
  //   expect(state).toEqual([]);
  // });

  // it('adds an expense', () => {
  //   const expense1 = { name: '1' };
  //   const expense2 = { name: '2' };
  //   const expense3 = { name: '3' };

  //   const state = expenses([expense1, expense2], {
  //     type: EXPENSE_ADD,
  //     payload: expense3
  //   });

  //   expect(state).toEqual([expense1, expense2, expense3]);
  // });

  // it('updates an expense', () => {
  //   const expense1 = { id: 'yum123', name: '1' };
  //   const expense2 = { id: 'yum456', name: '2' };
  //   const expense3 = { id: 'yum789', name: '3' };

  //   const updated = { id: 'yum789', name: 'updated' };

  //   const state = expenses([expense1, expense2, expense3], {
  //     type: EXPENSE_UPDATE,
  //     payload: updated
  //   });

  //   expect(state).toEqual([expense1, expense2, updated]);
  // });

  // it('removes an expense', () => {
  //   const expense1 = { id: 'yum123', name: '1' };
  //   const expense2 = { id: 'yum456', name: '2' };
  //   const expense3 = { id: 'yum789', name: '3' };

  //   const state = expenses([expense1, expense2, expense3], {
  //     type: EXPENSE_REMOVE,
  //     payload: 'yum789'
  //   });

  //   expect(state).toEqual([expense1, expense2]);
  // });

  it('loads expenses when categories load', () => {
    // const expense1 = { categoryId: '123', name: '1' };
    // const expense2 = { categoryId: '456', name: '2' };
    // const expense3 = { categoryId: '789', name: '3' };
    // const expense4 = { categoryId: '789', name: '4' };

    // const payload = {
    //   '123': [expense1],
    //   '456': [expense2],
    //   '789': [expense3, expense4]
    // };

    // const state = categories({}, {
    //   type: CATEGORY_LOAD,
    //   payload
    // });

    // expect(state).toEqual({});
  });
});