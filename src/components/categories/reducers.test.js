import {
  categories,
  // CATEGORY_LOAD,
  // CATEGORY_ADD
} from './reducers';

describe('categories reducers', () => {
  it('intializes to an empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });
});