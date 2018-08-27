import * as actions from './actions';
import * as reducers from './reducers';
import data from '../categories-data';

describe('Actions', () => {

  it('should create an action that loads categories', () => {
    const expectedAction = {
      type: reducers.CATEGORY_LOAD,
      payload: data
    };

    expect(actions.load()).toEqual(expectedAction);
  });

  it('should create an action that adds a category', () => {
    const category = {
      timestamp: '2018-8-23',
      name: 'travel',
      budget: 1000
    };
    const expectedAction = {
      type: reducers.CATEGORY_ADD,
      payload: category
    };

    expect(actions.add(category)).toEqual(expectedAction);
  });

  it('should create an action that upates a category', () => {
    const category = {
      timestamp: '2018-8-24',
      name: 'travel',
      budget: 2000
    };
    const expectedAction = {
      type: reducers.CATEGORY_UPDATE,
      payload: category
    };

    expect(actions.update(category)).toEqual(expectedAction);
  });

  it('should create an action that removes a category', () => {
    const category = {
      timestamp: '2018-8-24',
      name: 'travel',
      budget: 2000
    };
    const key = actions.add(category).payload.key;
    const expectedAction = {
      type: reducers.CATEGORY_REMOVE,
      payload: key
    };

    expect(actions.remove(key)).toEqual(expectedAction);
  });
});