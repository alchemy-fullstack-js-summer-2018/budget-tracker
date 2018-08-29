import { 
  categories, 
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE
  
} from './reducers';

describe('Categories reducers', () => {

  it('initialize to empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads categories', () => {
    const payload = [{}, {}, {}];

    const state = categories([], { 
      type:CATEGORY_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });

  it('adds category', () => {
    const category1 = { name: 'Food', budget: 300 };
    const category2 = { name: 'Car', budget: 250 };
    const category3 = { name: 'House', budget: 1200 };

    const state = categories([category1, category2], { 
      type: CATEGORY_ADD,
      payload: category3
    });

    expect(state).toEqual([category1, category2, category3]);
  });

  it('Updates a category', () => {
    const category1 = { key: 'Food', budget: 300 };
    const category2 = { key: 'Car', budget: 250 };
    const category3 = { key: 'House', budget: 1200 };

    const updated = { key: 'Car', budget: '350' };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_UPDATE,
      payload: updated
    });

    expect(state).toEqual([category1, updated, category3]);
  });

  it('Removes a category', () => {
    const category1 = { key: 'Food', budget: 300 };
    const category2 = { key: 'Car', budget: 250 };
    const category3 = { key: 'House', budget: 1200 };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_REMOVE,
      payload: 'Car'
    });

    expect(state).toEqual([category1, category3]);
  });

});