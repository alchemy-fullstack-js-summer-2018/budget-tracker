const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => action => {

  const { type, payload } = action;
  if(!isPromise(payload)) return next(action);

  // dispatch({ type: LOAD_START });

  return payload
    .then(
      result => {

        return dispatch({
          type,
          payload: result
        });
      },
      err => {
        throw err;
      }
    );

};