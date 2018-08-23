import { load, add, update, remove } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD } from './reducers';
import data from '../../services/category-data';

describe('Categories actions', () => {
  it('loads the animals, two by two', () => {
    const action = load();
    expect(action).toEqual({
      type: CATEGORY_LOAD,
      payload: data
    });
  });

  it('adds a category with a generated short id', () => {
    const newCategory = { timestamp: new Date(), name: 'dining', budget: 150 };
    const action = add(newCategory);
    expect(action.payload.key).toBeDefined();
    expect(action.type).toBe(CATEGORY_ADD);
  });

  it('updates a category', () => {
    const newCategory = { timestamp: new Date(), name: 'dining', budget: 150 };
    add(newCategory);
    newCategory.name = 'bars';
    const updateAction = update(newCategory);
    expect(updateAction.payload.name).toBe('bars');
  });

  it('removes a category', () => {
    const newCategory = { timestamp: new Date(), name: 'dining', budget: 150 };
    const key = add(newCategory).payload.key;
    const action = remove(key);
    expect(action.payload).toBe(key);
  });
});