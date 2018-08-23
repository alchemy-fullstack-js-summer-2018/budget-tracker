import { CATEGORY_ADD, CATEGORY_LOAD } from './reducers';
import data from './categories-data';
import shortid from 'shortid';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: data
});

export const add = category => {
  category.key = shortid.generate();
  return {
    type: CATEGORY_ADD,
    payload: category
  };
};