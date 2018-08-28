jest.mock('../../services/budgetApi', () => ({
  loadCategories: jest.fn(),
  addCategory: jest.fn(),
  removeCategory: jest.fn()
}));

import { load  } from './actions';
import { CATEGORY_LOAD } from './reducers';
import { loadCategories } from '../../services/budgetApi';

describe('Category action creators', () => {

  it('Loads categories', () => {
    const promise = Promise.resolve();
    loadCategories.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(payload).toBe(promise);
    expect(loadCategories.mock.calls.length).toBe(1);
  });
});