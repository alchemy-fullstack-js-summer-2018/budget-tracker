import { 
  CATEGORY_LOAD, 
  CATEGORY_ADD, 
  CATEGORY_UPDATE,
  CATEGORY_REMOVE 
} from './category-reducers.js';
// import data from './categories/categories-data.js';
import shortid from 'shortid';
import { getCategories } from '../services/budgetTrackerApi';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: getCategories()
});

export const add = category => {
  category.key = shortid.generate();
  category.categoryId = shortid.generate();
  category.timestamp = new Date();
  category.expenses = [];
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