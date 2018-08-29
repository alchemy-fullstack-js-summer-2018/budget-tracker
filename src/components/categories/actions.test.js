jest.mock('../../services/categoriesApi', () => ({
  getCategories: jest.fn(),
  addCategory: jest.fn(),
  removeCategory: jest.fn(),
  updateCategory: jest.fn()
}));

import { load, add, remove, update } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';
import { getCategories, addCategory, removeCategory, updateCategory } from '../../services/categoriesApi';


describe('category action creators', () => {
  const category =   
    { key: 'PPBqWA9', 
      name: 'Rent', 
      timeStamp: '2095-12-17T03:24:00', 
      budget: 500,
      expenses: [
        {
          id: 'GQ45',
          categoryId: 'PPBqWA9',
          timestamp: '2018-11-10T03:24:00',
          name: 'Rent Payment',
          amount: '$500',
        }
      ] };

  it('should load data', () => {
    const promise = Promise.resolve();
    getCategories.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(payload).toBe(promise);
    expect(getCategories.mock.calls.length).toBe(1);
  });

  it('should add a new category to the data', () => {
    const promise = Promise.resolve();
    addCategory.mockReturnValueOnce(promise);

    const { type, payload } = add(category);
    expect(type).toBe(CATEGORY_ADD);
    expect(payload).toBe(promise);
    expect(addCategory.mock.calls.length).toBe(1);
    expect(addCategory.mock.calls[0][0]).toBe(category);
  });

  it('should remove a category from the data', () => {
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

  it('should update an item in the database', () => {
    const updatedCategory = 
    { key: 'PPBqWA9', 
      name: 'HOUSING', 
      timeStamp: '2095-12-17T03:24:00', 
      budget: 500,
      expenses: [
        {
          id: 'GQ45',
          categoryId: 'PPBqWA9',
          timestamp: '2018-11-10T03:24:00',
          name: 'Rent Payment',
          amount: '$500',
        }
      ] };
    const promise = Promise.resolve();
    updateCategory.mockReturnValueOnce(promise);

    const { type, payload } = update(updatedCategory);
    expect(type).toBe(CATEGORY_UPDATE);
    expect(payload).toBe(promise);
    expect(updateCategory.mock.calls.length).toBe(1);
    expect(updateCategory.mock.calls[0][0]).toBe(updatedCategory);
  });
});