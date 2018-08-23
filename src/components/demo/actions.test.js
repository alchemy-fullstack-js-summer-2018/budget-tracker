import { increment, decrement, change } from './actions';
import { INCREMENT, DECREMENT, CHANGE } from './reducers';

describe('Counter actions test', () => {
  
  it('Increments', () => {
    const action = increment();
    expect(action).toEqual({ type: INCREMENT });
  });

  it('Decrements', () => {
    const action = decrement();
    expect(action).toEqual({ type: DECREMENT });
  });

  it('Changes', () => {
    const action = change(4);
    expect(action).toEqual({ type: CHANGE, payload: 4 });
  });

});