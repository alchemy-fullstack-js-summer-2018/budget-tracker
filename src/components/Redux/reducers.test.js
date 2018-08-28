import {
  categories,
  CATEGORY_LOAD,
  CATEGORY_ADD,
  // CATEGORY_UPDATE,
  // CATEGORY_REMOVE
} from './reducers';

describe('categories reducers', () => {

  it('initializes to empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
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
    const state = categories([category1], { 
      type: CATEGORY_ADD,
      payload: category2
    });
    expect(state).toEqual([category1, category2]);
  });



});