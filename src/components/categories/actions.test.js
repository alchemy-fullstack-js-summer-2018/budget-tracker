import { load, add, remove, update } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';
// import data from './categories-data';


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

  it('should remove a category from the data', () => {
    const payload = { key: 'GWBqNA2', 'name': 'Groceries', 'timeEntered': '1995-12-17T03:24:00', 'budget': 500 };
    const expectedAction = {
      type: CATEGORY_REMOVE,
      payload
    };
    expect(remove(payload.key).type).toEqual(expectedAction.type);
  });

  it('should update an item in the database', () => {
    const payload = { key: 'GWBqNA2', 'name': 'Groceries', 'timeEntered': '1995-12-17T03:24:00', 'budget': 500 };
    const expectedAction = {
      type: CATEGORY_UPDATE,
      payload
    };
    expect(update(payload.key).type).toEqual(expectedAction.type);
  });
});