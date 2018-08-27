import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
import { load, add, update, remove } from './actions';
import data from './categories-data';

describe('budget actions', () => {

  it('loads categories', () => {
    const action = load();
    expect(action).toEqual({ type: CATEGORY_LOAD, payload: data });
  });

  it('adds a category', () => {
    const addCategory = { 
      name: 'Pudding',
      budget: 600
    };
    const action = add(addCategory);

    expect(action).toEqual({ payload: addCategory, type: CATEGORY_ADD });
  });

  it('removes category', () => {
    const delCategory = { name: 'Catio', budget: 2000 };
    const action = remove(delCategory);

    expect(action).toEqual({ payload: delCategory, type: CATEGORY_REMOVE });
  });

  it('updates', () => {
    const updateCategory = { name: 'Fur Comb', budget: 6000 };
    const action = update(updateCategory);

    expect(action).toEqual({ payload: updateCategory, type: CATEGORY_UPDATE });
  });

});