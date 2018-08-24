import { load, } from './actions';
import  data from './categories-data';
import { CATEGORY_LOAD, } from './reducers';

describe('Category actions tests', () => {
  
  it('Loads', () => {
    const action = load();
    expect(action).toEqual({ type: CATEGORY_LOAD, payload: data });
  });

});  