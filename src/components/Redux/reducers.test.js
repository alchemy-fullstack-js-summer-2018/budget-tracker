import { 
  categories,
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE  } from './reducers';

describe('Reducers', () => {

  it('initializes to empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads a category', () => {
    const payload = [{}, {}, {}];

    const state = categories([], {
      type: CATEGORY_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });

  it('adds categories', () => {
    const category1 = { name: 'gas' };
    const category2 = { name: 'rent' };
    const category3 = { name: 'food' };

    const state = categories([category1, category2], {
      type: CATEGORY_ADD,
      payload: category3
    });

    expect(state).toEqual([category1, category2, category3]);
  });

  it('updates a category', () => {
    const category1 = { key: 'abc123', name: 'gas' };
    const category2 = { key: 'def456', name: 'rent' };
    const category3 = { key: 'ghi789', name: 'food' };

    const updated = { key: 'abc123', name: 'shopping' };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_UPDATE,
      payload: updated
    });

    expect(state).toEqual([updated, category2, category3]);
  });

  it('removes a category', () => {
    const category1 = { key: 'abc123', name: 'gas' };
    const category2 = { key: 'def456', name: 'rent' };
    const category3 = { key: 'ghi789', name: 'food' };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_REMOVE,
      payload: category2
    });

    expect(state).toEqual([category1, category3]);
  });
});