jest.mock('../../../services/budgetApi', () => ({
  loadCategories: jest.fn()
}));

import { load } from './actions';
import { CATEGORY_LOAD } from './reducers';
// import data from '../categories-data';
import { loadCategories/* , addCategory *//* , removeCategory */ } from '../../../services/budgetApi';

describe('Category Action Creators', () => {

  it('loads categories', () => {
    const promise = Promise.resolve();
    loadCategories.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(payload).toBe(promise);

    expect(loadCategories.mock.calls.length).toEqual(1);
  });

  // it.skip('should create an action that adds a category', () => {
  //   const category = {
  //     timestamp: '2018-8-23',
  //     name: 'travel',
  //     budget: 1000
  //   };
  //   const expectedAction = {
  //     type: reducers.CATEGORY_ADD,
  //     payload: category
  //   };

  //   expect(actions.add(category)).toEqual(expectedAction);
  // });

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