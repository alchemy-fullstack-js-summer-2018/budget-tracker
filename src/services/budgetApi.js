import { put, post, get, del } from './request';

const URL = 'https://budget-sr.firebaseio.com';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORIES_URL}/${key}.json`;

export const loadCategories = () => {
  return get(`${CATEGORIES_URL}.json`)
    .then(response => {
      return response
        ? Object.keys(response).map(key => {
          const each = response[key];
          each.key = key;
          return each; 
        }) 
        : [];
    });
};

export const addCategory = category => {
  const url = `${CATEGORIES_URL}.json`;
  return post(url, category)
    .then(response => {
      category.key = response.name;
      return category;
    });
};

export const updateCategory = category => {
  // eslint-disable-next-line
  const { key, ...copy } = category;
  const url = getCategoryUrl(category.key);
  return put(url, copy);
};

export const removeCategory = id => {
  const url = getCategoryUrl(id);
  return del(url);
};