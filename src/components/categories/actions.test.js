import { load, add } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD } from './reducers';


describe('actions', () => {

  it('should load data as an array', () => {
    const payload = [{}, {}];
    const expectedAction = {
      type: CATEGORY_LOAD,
      payload
    };
    expect(load(payload).type).toEqual(expectedAction.type);
  });

  it('should add a new category to the data', () => {
    const payload = { key: 'GWBqNA2', 'name': 'Groceries', 'timeEntered': '1995-12-17T03:24:00', 'budget': 500 };
    const expectedAction = {
      type: CATEGORY_ADD,
      payload
    };
    expect(add(payload)).toEqual(expectedAction);
  });
});