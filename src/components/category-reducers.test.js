import {
  categories,
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE
} from './category-reducers';

describe('categories reducers', () => {

  it('initializes to an empty array', () => {
    const state = categories(undefined, {});
    expect (state).toEqual([]);
  });

  it('loads categories', () => {
    const payload = [{}, {}, {}];

    const state = categories([], {
      type: CATEGORY_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });

  it('adds category', () => {
    const category1 = { name: '1' };
    const category2 = { name: '2' };
    const category3 = { name: '3' };

    const state = categories([category1, category2], {
      type: CATEGORY_ADD,
      payload: category3
    });

    expect(state).toEqual([category1, category2, category3]);

  });

  it('updates a category', () => {
    const category1 = { key: '1', name: 'rent' };
    const category2 = { key: '2', name: 'car' };
    const category3 = { key: '3', name: 'power' };

    const updated = { key: '2', name: 'groceries' };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_UPDATE,
      payload: updated
    });

    expect(state).toEqual([
      category1,
      updated,
      category3
    ]);

  });

  it('removes a category', () => {
    const category1 = { key: '1', name: 'rent' };
    const category2 = { key: '2', name: 'car' };
    const category3 = { key: '3', name: 'power' };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_REMOVE,
      payload: '2'
    });

    expect(state).toEqual([
      category1,
      category3
    ]);
  });
});