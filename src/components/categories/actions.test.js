import { load, add, update, remove } from './actions';
import  data from './categories-data';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';

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

  it('Removes a category', () => {
    const action = remove('-LKTi4U-7iQyGe9m1Zy5');      
    expect(action).toEqual({ type: CATEGORY_REMOVE, payload: '-LKTi4U-7iQyGe9m1Zy5' });
  });

});  