import { count } from './reducers';

describe.only('Demo reducers', () => {

  it('Initializes count to 0', () => {
    const state = count(undefined, {});
    expect(state).toBe(0);
  });
});