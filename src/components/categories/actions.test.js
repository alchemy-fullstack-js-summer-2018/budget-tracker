import { CATEGORY_LOAD } from './reducers';
import data from '../../services/category-data';
import { 
  load,
  add,
  // update,
  // remove
} from './actions';

describe('Categories actions', () => {
  it('loads the animals, two by two', () => {
    const action = load();
    expect(action).toEqual({
      type: CATEGORY_LOAD,
      payload: data
    });
  });

  it('adds an animal with a generated short id', () => {
    const newCategory = { timestamp: new Date(), name: 'dining', budget: 150 };
    const action = add(newCategory);
    expect(action.key).toBeDefined();
  });
});