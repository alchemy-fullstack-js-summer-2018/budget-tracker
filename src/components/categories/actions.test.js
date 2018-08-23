import { load, add, update, remove } from './actions';
import  data from './categories-data';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';

describe('Category actions test', () => {
  
  it('Loads', () => {
    const action = load();
    expect(action).toEqual({ type: CATEGORY_LOAD, payload: data });
  });

  it('Adds', () => {
    const payload = {};
    const action = add(payload);
    expect(action).toEqual({ type: CATEGORY_ADD, payload: payload });
  });

  it('Updates', () => {
    const action = update(4);
    expect(action).toEqual({ type: CATEGORY_UPDATE,   payload: 4
    });
  });

  it('Removes', () => {
    const action = remove('123');
    expect(action).toEqual({ type: CATEGORY_REMOVE, payload: '123' });
  });

});