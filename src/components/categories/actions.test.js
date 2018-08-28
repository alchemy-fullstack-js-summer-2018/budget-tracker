jest.mock('../../services/categoriesApi', () => ({
  getCategories: jest.fn(),
  addCategory: jest.fn(),
  removeCategory: jest.fn()
}));

import { load, add, update, remove } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
import { getCategories, addCategory, removeCategory } from '../../services/categoriesApi';

describe('Category actions', () => {

  it('Loads categories', () => {
    const promise = Promise.resolve();
    getCategories.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(payload).toBe(promise);
    expect(getCategories.mock.calls.length).toBe(1);
  });

  it.skip('Adds a category', () => {

  });

  it.skip('Updates a category', () => {

  });

  it.skip('Removes a category', () => {

  });

});