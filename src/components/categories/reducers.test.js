import {
  categories,
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE,
  expenses,
  EXPENSE_LOAD,
  EXPENSE_ADD,
  EXPENSE_UPDATE,
  EXPENSE_REMOVE
} from './reducers';

// categories reducers
describe('categories reducers', () => {

  it('initialize to empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads categories', () => {
    const payload = [{}, {}, {}];

    const state = categories([], {
      type: CATEGORY_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });

  it('adds a category', () => {
    const category1 = { name: '1' };
    const category2 = { name: '2' };
    const category3 = { name: '3' };

    const state = categories([category1, category2], {
      type: CATEGORY_ADD,
      payload: category3
    });

    expect(state).toEqual([category1, category2, category3]);
  });

  it('update category', () => {
    const category1 = { key: '1', name: 'a' };
    const category2 = { key: '2', name: 'b' };
    const category3 = { key: '3', name: 'c' };

    const updated = { key: '2', name: 'f' };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_UPDATE,
      payload: updated
    });

    expect(state).toEqual([
      category1,
      updated,
      category3
    ]);
  });

  it('remove category', () => {
    const category1 = { key: '1', name: 'a' };
    const category2 = { key: '2', name: 'b' };
    const category3 = { key: '3', name: 'c' };
    
    const state = categories([category1, category2, category3], {
      type: CATEGORY_REMOVE,
      payload: '2'
    });

    expect(state).toEqual([
      category1,
      category3
    ]);
  });
});

// expenses reducers

describe.only('expenses by category reducers', () => {

  const expense1 = {
    id: 
  };

  const expense2 = {

  };

  it('initialize to empty array', () => {
    const state = expenses(undefined, {});
    expect(state).toEqual([]);
  });
  
  // console.log('*** state', state);

  it('adds an expense', () => {
    const expense1 = { name: '1' };
    const expense2 = { name: '2' };
    const expense3 = { name: '3' };

    const state = expenses([expense1, expense2], {
      type: EXPENSE_ADD,
      payload: expense3
    });

    expect(state).toEqual([expense1, expense2, expense3]);
  });


});