import { CATEGORY_LOAD } from './reducers';
import data from './categories-data';
 

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: data
});



