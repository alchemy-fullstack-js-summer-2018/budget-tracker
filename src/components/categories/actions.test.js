jest.mock('../../services/categoriesApi', () => ({
  getCategories: jest.fn(),
  addCategory: jest.fn(),
  removeCategory: jest.fn()
}));

import { load, add, /* update */ remove } from './actions';
import { getCategories, /* addCategory*/ removeCategory } from '../../services/categoriesApi';
import { CATEGORY_LOAD, CATEGORY_ADD, /* CATEGORY_UPDATE */ CATEGORY_REMOVE } from './reducers';

describe.only('Category actions tests', () => {
  
  it('Loads a category', () => {
    const promise = Promise.resolve();
    getCategories.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(promise).toBe(payload);
    expect(getCategories.mock.calls.length).toBe(1);
  });


  it.skip('Adds a category', () => {
    const payload = {};
    const action = add(payload);
    expect(action).toEqual({ type: CATEGORY_ADD, payload: payload });
  });

  // it('Updates a category', () => {
  //   const action = update(9);
  //   expect(action).toEqual({ type: CATEGORY_UPDATE,   payload: 9
  //   });
  // });  

  it('Removes a category', () => {
    const promise = Promise.resolve();
    removeCategory.mockReturnValueOnce(promise);
    const key = 123;

    const { type, payload } = remove(key);
    expect(type).toBe(CATEGORY_REMOVE);
    expect(removeCategory.mock.calls.length).toBe(1);
    expect(removeCategory.mock.calls[0][0]).toBe(key);

    return payload.then(keyToDelete => {
      expect(keyToDelete).toBe(key);
    });
  });

});  