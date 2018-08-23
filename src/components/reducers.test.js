import {
  categories,
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE
} from './reducers';

describe('categories reducers', () => {

  it('initializes to an empty array', () => {
    const state = categories(undefined, {});
    expect (state).toEqual([]);
  });

});