import {
  CATEGORY_LOAD,
  CATEGORY_ADD,
} from './Redux/reducers.js';
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


