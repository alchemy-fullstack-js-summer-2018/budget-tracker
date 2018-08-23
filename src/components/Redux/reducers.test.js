import { reducer } from './reducers';

describe('Reducers', () => {

  it('initializes state', () => {
    const state = reducer(undefined, {});
    expect(state).toBe(0);
  });
});