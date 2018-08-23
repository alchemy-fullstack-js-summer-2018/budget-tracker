import { load, add, update, remove } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
import data from './categories-data';

describe('Category actions', () => {

  it('Loads', () => {
    const action = load();

    expect(action).toEqual({ payload: data, type: CATEGORY_LOAD });
  });

  it('Adds', () => {
    const category = { name: 'Pets', budget: 50 };
    const action = add(category);

    expect(action).toEqual({ payload: category, type: CATEGORY_ADD });
  });

  it('Updates', () => {
    const category1 = { name: 'Automobile', budget: 800 };
    const action = update(category1);

    expect(action).toEqual({ payload: category1, type: CATEGORY_UPDATE });
  });

  it('Removes', () => {
    const category1 = { name: 'Automobile', budget: 800 };
    const action = remove(category1);

    expect(action).toEqual({ payload: category1, type: CATEGORY_REMOVE });
  });

});