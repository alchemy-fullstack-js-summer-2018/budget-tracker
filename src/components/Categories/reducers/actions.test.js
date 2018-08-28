jest.mock('../../../services/budgetApi', () => ({
  loadCategories: jest.fn(),
  addCategory: jest.fn()
}));

import { load, add } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD } from './reducers';
// import data from '../categories-data';
import { loadCategories, addCategory } from '../../../services/budgetApi';

describe('Category Action Creators', () => {

  it('loads categories', () => {
    const promise = Promise.resolve();
    loadCategories.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(payload).toBe(promise);

    expect(loadCategories.mock.calls.length).toEqual(1);
  });

  it('adds a category', () => {
    const category = {
      name: 'travel',
      budget: 1000
    };
    const promise = Promise.resolve();
    addCategory.mockReturnValueOnce(promise);

    const { type, payload } = add(category);
    expect(type).toBe(CATEGORY_ADD);
    expect(promise).toBe(payload);

    expect(addCategory.mock.calls.length).toBe(1);
    expect(addCategory.mock.calls[0][0]).toBe(category);
  });

  // it.skip('should create an action that upates a category', () => {
  //   const category = {
  //     timestamp: '2018-8-24',
  //     name: 'travel',
  //     budget: 2000
  //   };
  //   const expectedAction = {
  //     type: reducers.CATEGORY_UPDATE,
  //     payload: category
  //   };

  //   expect(actions.update(category)).toEqual(expectedAction);
  // });

  // it.skip('should create an action that removes a category', () => {
  //   const category = {
  //     timestamp: '2018-8-24',
  //     name: 'travel',
  //     budget: 2000
  //   };
  //   const key = actions.add(category).payload.key;
  //   const expectedAction = {
  //     type: reducers.CATEGORY_REMOVE,
  //     payload: key
  //   };

  //   expect(actions.remove(key)).toEqual(expectedAction);
  // });
});