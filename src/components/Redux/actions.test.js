import * as actions from './actions';
import * as reducers from './reducers';
import data from '../Categories/categories-data';

describe('Actions', () => {

  it('should create an action that loads categories', () => {
    const expectedAction = {
      type: reducers.CATEGORY_LOAD,
      payload: data
    };

    expect(actions.load(data)).toEqual(expectedAction);
  });

  it('should create an action that adds a category', () => {
    const expectedAction = {
      type: reducers.CATEGORY_ADD,
      payload: data
    };

    expect(actions.add(data)).toEqual(expectedAction);
  });
});