import {
  categories,
  CATEGORY_LOAD,
  // CATEGORY_ADD
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
});