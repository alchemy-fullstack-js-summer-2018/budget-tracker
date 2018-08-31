import {
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE
} from './reducers';
import shortid from 'shortid';
import { loadCategories } from '../../services/budgetApi';
// import data from '../categories/categories-data.js';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: loadCategories()

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

export const remove = key => ({
  type: CATEGORY_REMOVE,
  payload: key
});





