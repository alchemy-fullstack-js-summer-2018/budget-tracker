import { load, add, update } from './actions';
import  data from './categories-data';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE } from './reducers';

describe('Category actions tests', () => {
  
  it('Loads a category', () => {
    const action = load();
    expect(action).toEqual({ type: CATEGORY_LOAD, payload: data });
  });


  it('Adds a category', () => {
    const payload = {};
    const action = add(payload);
    expect(action).toEqual({ type: CATEGORY_ADD, payload: payload });
  });

  it('Updates a category', () => {
    const action = update(9);
    expect(action).toEqual({ type: CATEGORY_UPDATE,   payload: 9
    });
  });
});  