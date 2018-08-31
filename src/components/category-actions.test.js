import { add, load, update, remove } from './category-actions';
import { CATEGORY_ADD, CATEGORY_LOAD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './category-reducers';

import data from './categories/categories-data';

describe.skip('categories actions', () => {
  it('adds a category', () => {
    const category = {
      name: 'TV and Video',
      budget: 40,
    };
    const action = add(category);
    expect(action).toEqual({
      type: CATEGORY_ADD,
      payload: category
    });
    expect(action.payload.key).toBeDefined();
    expect(action.payload.timestamp).toBeDefined();
  });

  it('loads categories', () => {
    const action = load();
    expect(action).toEqual({
      type: CATEGORY_LOAD,
      payload: data
    });
  });

  it('updates a category', () => {
    const category = {
      name: 'Rent',
      budget: 1495,
    };
    const action = update(category);
    expect(action).toEqual({
      type: CATEGORY_UPDATE,
      payload: category
    });
  });

  it('removes a category', () => {
    const action = remove('2');
    expect(action).toEqual({
      type: CATEGORY_REMOVE,
      payload: '2'
    });
  });
});
