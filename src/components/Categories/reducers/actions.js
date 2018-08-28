import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
// import data from '../categories-data';
import { loadCategories/* , addCategory, updateCategory, removeCategory */ } from '../../../services/budgetApi';
import shortid from 'shortid';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: loadCategories()
});

export const add = category => {
  category.key = shortid.generate();
  category.id = shortid.generate();
  category.timestamp = new Date();
  category.expense = [];
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