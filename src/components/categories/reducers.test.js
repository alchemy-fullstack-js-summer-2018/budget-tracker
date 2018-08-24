import { 
  categories, 
  CATEGORY_LOAD

} from './reducers';

describe('animals reducers', () => {

  it('initialize to empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads categories', () => {
    const payload = [{}, {}, {}];

    const state = categories([], { 
      type:CATEGORY_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });

});