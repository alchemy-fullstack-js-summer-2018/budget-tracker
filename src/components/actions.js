import { 
  CATEGORY_LOAD, 
  CATEGORY_ADD, 
  CATEGORY_UPDATE,
  CATEGORY_REMOVE 
} from './reducers.js';
import data from './categories/categories-data';
import shortid from 'shortid';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: data
});

export const add = category => {
  category.key = shortid.generate();
  category.timestamp = new Date();
  return {
    type: CATEGORY_ADD,
    payload: category
  };
};

export const update = category => ({
  type: CATEGORY_UPDATE,
  payload: category
});

export const remove = id => ({
  type: CATEGORY_REMOVE,
  payload: id
});