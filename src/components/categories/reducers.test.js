import {
  categories,
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE
} from './reducers';

describe('Categories Reducers', () => {

  it('Initialize to empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });

  it('Adds a category', () => {
    const category1 = { name: 'Automobile' };
    const category2 = { name: 'Food & Dining' };
    const category3 = { name: 'Utilities' };

    const state = categories([category1, category2], {
      type: CATEGORY_ADD,
      payload: category3
    });

    expect(state).toEqual([category1, category2, category3]);
  });

});