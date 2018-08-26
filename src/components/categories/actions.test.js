import { load, add, update, remove } from './categoryActions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './categoryReducers';
import data from '../../services/category-data';

describe('Categories actions', () => {
  it('loads the categories', () => {
    const action = load();
    expect(action).toEqual({
      type: CATEGORY_LOAD,
      payload: data
    });
  });

  it('adds a category', () => {
    const newCategory = { timestamp: new Date(), name: 'dining', budget: 150 };
    const action = add(newCategory);
    expect(action).toEqual({
      type: CATEGORY_ADD,
      payload: newCategory
    });
  });

  it('updates a category', () => {
    const newCategory = { timestamp: new Date(), name: 'dining', budget: 150 };
    const action = update(newCategory);
    expect(action).toEqual({
      type: CATEGORY_UPDATE,
      payload: newCategory
    });
  });

  it('removes a category', () => {
    const key = 'a123kjl';
    const action = remove(key);
    expect(action).toEqual({
      type: CATEGORY_REMOVE,
      payload: key
    });
  });
});