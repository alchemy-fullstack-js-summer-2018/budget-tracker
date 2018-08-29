import { 
  CATEGORY_LOAD, 
  CATEGORY_ADD, 
  CATEGORY_UPDATE,
  CATEGORY_REMOVE 
} from './category-reducers.js';

// import shortid from 'shortid';

import { 
  getCategories,
  addCategory,
  updateCategory,
  removeCategory
} from '../services/budgetTrackerApi';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: getCategories()
});

export const add = category => {
  // category.key = shortid.generate();
  category.timestamp = (new Date()).toLocaleString();
  return {
    type: CATEGORY_ADD,
    payload: addCategory(category)
  };
};

export const update = category => ({
  type: CATEGORY_UPDATE,
  payload: updateCategory(category)
});

export const remove = key => ({
  type: CATEGORY_REMOVE,
  payload: removeCategory(key).then(() => key)
});