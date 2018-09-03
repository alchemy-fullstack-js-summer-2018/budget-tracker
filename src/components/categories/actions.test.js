jest.mock('../../services/budgetApi', () => ({
  loadCategories: jest.fn(),
  addCategory: jest.fn(),
  removeCategory: jest.fn()
}));

import { load, add, remove  } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from './reducers';
import { loadCategories, addCategory, removeCategory } from '../../services/budgetApi';

describe('Category action creators', () => {

  it('Loads categories', () => {
    const promise = Promise.resolve();
    loadCategories.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(payload).toBe(promise);
    expect(loadCategories.mock.calls.length).toBe(1);
  });

  it('Adds a category', () => {
    const category = { name: 'Car' };
    const promise = Promise.resolve();
    addCategory.mockReturnValueOnce(promise);

    const { type, payload } = add(category);
    expect(type).toBe(CATEGORY_ADD);
    expect(payload).toBe(promise);
    expect(addCategory.mock.calls.length).toBe(1);
    expect(addCategory.mock.calls[0][0]).toBe(category);

  });

  it('Removes a category', () => {
    const promise = Promise.resolve();
    removeCategory.mockReturnValueOnce(promise);

    const id = 456;

    const { type, payload } = remove(id);
    expect(type).toBe(CATEGORY_REMOVE);
    expect(removeCategory.mock.calls.length).toBe(1);
    expect(removeCategory.mock.calls[0][0]).toBe(id);

    return payload.then(idToDelete => {
      expect(idToDelete).toBe(id);
    });

  });
});