import { CATEGORY_ADD, CATEGORY_LOAD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';
import { getCategories, addCategory, updateCategory, removeCategory } from '../../services/categoriesApi';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: getCategories()
});

export const add = category => {
  category.timeStamp = (new Date()).toLocaleString();
  category.expenses = [];
  return {
    type: CATEGORY_ADD,
    payload: addCategory(category)
  };
};

export const update = category => ({
  type: CATEGORY_UPDATE,
  payload: updateCategory(category)
});

export const remove = id => ({
  type: CATEGORY_REMOVE,
  payload: removeCategory(id).then(() => id)
});