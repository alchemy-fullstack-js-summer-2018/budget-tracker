import { CATEGORY_ADD, CATEGORY_LOAD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';
import data from './categories-data';
import shortid from 'shortid';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: data
});

export const add = category => {
  category.key = shortid.generate();
  category.timeStamp = (new Date()).toLocaleString();
  return {
    type: CATEGORY_ADD,
    payload: category
  };
};

export const update = category => ({
  type: CATEGORY_UPDATE,
  payload: category
})

export const remove = id => ({
  type: CATEGORY_REMOVE,
  payload: id
});