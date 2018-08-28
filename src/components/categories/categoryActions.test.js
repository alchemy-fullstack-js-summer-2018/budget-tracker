jest.mock('../../services/categoriesApi', () => ({
  loadAnimals: jest.fn()
}));

import { load } from './categoryActions';
import { CATEGORY_LOAD } from './categoryReducers';
import { loadAnimals } from '../../services/categoriesApi';

describe('Categories actions', () => {
  it('loads the categories', () => {
    const promise = Promise.resolve();
    loadAnimals.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(payload).toBe(promise);
    expect(loadAnimals.mock.calls.length).toBe(1);
  });
});