import {
  categories,
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE
} from './reducers';

describe('categories reducers', () => {
  it('intializes to an empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads proper data as an array', () => {
    const payload = [{}, {}, {}];

    const state = categories([], {
      type: CATEGORY_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });

  it('add a category to the data', () => {
    const category1 = { name: 'Car' };
    const category2 = { name: 'Rent' };
    const category3 = { name: 'Gym' };

    const state = categories([category1, category2], {
      type: CATEGORY_ADD,
      payload: category3
    });

    expect(state).toEqual([category1, category2, category3]);
  });

  it('updates a category in the data', () => {
    const category1 = { key: '1', name: 'Car' };
    const category2 = { key: '2', name: 'Rent' };
    const category3 = { key: '3', name: 'Gym' };

    const updated = { key: '2', name: 'BLAHBLAHBLAH' };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_UPDATE,
      payload: updated
    });

    expect(state).toEqual([category1, updated, category3]);
  });

  it('removes a category from the data', () => {
    const category1 = { key: '1', name: 'Car' };
    const category2 = { key: '2', name: 'Rent' };
    const category3 = { key: '3', name: 'Gym' };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_REMOVE,
      payload: '2'
    });

    expect(state).toEqual([category1, category3]);
  });
});