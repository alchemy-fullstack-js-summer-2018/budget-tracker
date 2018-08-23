import { 
  load,
  // add,
  // update,
  // remove
} from './actions';

describe('Categories actions', () => {
  it('loads the animals, two by two', () => {
    const action = load();
    expect(action).toEqual({
      type: 'CATEGORY_LOAD',
      payload: 'data'
    });
  });
});