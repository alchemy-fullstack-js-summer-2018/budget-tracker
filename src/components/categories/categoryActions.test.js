jest.mock('../../services/categoriesApi', () => ({
  loadCategories: jest.fn(),
  addCategory: jest.fn(),
  removeCategory: jest.fn(),
  updateCategory: jest.fn()
}));

import { load, add, remove, update } from './categoryActions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './categoryReducers';
import { loadCategories, addCategory, removeCategory, updateCategory } from '../../services/categoriesApi';

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

  it('removes a category', () => {
    const promise = Promise.resolve();
    removeCategory.mockReturnValueOnce(promise);
    const id = 123;

    const { type, payload } = remove(id);
    expect(type).toBe(CATEGORY_REMOVE);
    expect(removeCategory.mock.calls.length).toBe(1);
    expect(removeCategory.mock.calls[0][0]).toBe(id);

    return payload.then(idToDelete => {
      expect(idToDelete).toBe(id);
    });
  });

  it('updates a category', () => {
    const category = { name: 'splurges' };
    const promise = Promise.resolve();
    updateCategory.mockReturnValueOnce(promise);

    const { type, payload } = update(category);
    expect(type).toBe(CATEGORY_UPDATE);
    expect(payload).toBe(promise);
    expect(updateCategory.mock.calls.length).toBe(1);
    expect(updateCategory.mock.calls[0][0]).toBe(category);
  });
});