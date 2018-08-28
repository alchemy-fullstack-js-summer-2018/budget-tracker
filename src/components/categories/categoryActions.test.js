jest.mock('../../services/categoriesApi', () => ({
  loadCategories: jest.fn(),
  addCategory: jest.fn()
}));

import { load, add } from './categoryActions';
import { CATEGORY_LOAD, CATEGORY_ADD } from './categoryReducers';
import { loadCategories, addCategory } from '../../services/categoriesApi';

describe('Categories actions', () => {
  it('loads the categories', () => {
    const promise = Promise.resolve();
    loadCategories.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(payload).toBe(promise);
    expect(loadCategories.mock.calls.length).toBe(1);
  });

  it('adds a category', () => {
    const category = { name: 'splurges' };
    const promise = Promise.resolve();
    addCategory.mockReturnValueOnce(promise);

    const { type, payload } = add(category);
    expect(type).toBe(CATEGORY_ADD);
    expect(payload).toBe(promise);
    expect(addCategory.mock.calls.length).toBe(1);
    expect(addCategory.mock.calls[0][0]).toBe(category);
  });
});