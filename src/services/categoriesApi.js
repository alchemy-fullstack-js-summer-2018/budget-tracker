import { post, put, get, del } from './request';

const URL = 'https://alchemy-lab-965b5.firebaseio.com';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORIES_URL}/${key}.json`;

export const getCategories = () => {
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

export const addCategory = Category => {
  const url = `${CATEGORIES_URL}.json`;
  return post(url, Category)
    .then(res => {
      Category.key = res.name;
      return Category;
    });
};

export const updateCategory = Category => {
  const url = getCategoryUrl(Category.key);
  return put(url, Category);
};

export const removeCategory = key => {
  const url = getCategoryUrl(key);
  return del(url);
};