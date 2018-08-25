import {
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE
} from './reducers.js';
import shortid from 'shortid';
import data from '../Dashboard/categories-data.js';

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




