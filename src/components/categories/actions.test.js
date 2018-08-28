jest.mock('../../services/categoriesApi', () => ({
  getCategories: jest.fn(),
  addCategory: jest.fn()
}));

import { load, add, remove, update } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';
import { getCategories, addCategory } from '../../services/categoriesApi';
// import data from './categories-data';


describe('category action creators', () => {

  it('should load data', () => {
    const promise = Promise.resolve();
    getCategories.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(payload).toBe(promise);
    expect(getCategories.mock.calls.length).toBe(1);
  });

  it.only('should add a new category to the data', () => {
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
    const promise = Promise.resolve();
    addCategory.mockReturnValueOnce(promise);

    const { type, payload } = add(category);
    expect(type).toBe(CATEGORY_ADD);
    expect(payload).toBe(promise);
    expect(addCategory.mock.calls.length).toBe(1);
    expect(addCategory.mock.calls[0][0]).toBe(category);
  });

  it('should remove a category from the data', () => {
    const payload = { key: 'GWBqNA2', 'name': 'Groceries', 'timeEntered': '1995-12-17T03:24:00', 'budget': 500 };
    const expectedAction = {
      type: CATEGORY_REMOVE,
      payload
    };
    expect(remove(payload.key).type).toEqual(expectedAction.type);
  });

  it('should update an item in the database', () => {
    const payload = { key: 'GWBqNA2', 'name': 'Groceries', 'timeEntered': '1995-12-17T03:24:00', 'budget': 500 };
    const expectedAction = {
      type: CATEGORY_UPDATE,
      payload
    };
    expect(update(payload.key).type).toEqual(expectedAction.type);
  });
});