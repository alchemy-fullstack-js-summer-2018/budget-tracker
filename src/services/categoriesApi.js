import { post, get } from './request';

const URL = 'https://cr-budget.firebaseio.com/';
const CATEGORIES_URL = `${URL}/categories`;

const pivot = obj => {
  if(!obj) return [];

  return Object.keys(obj).map(key => {
    const each = obj[key];
    each.key = key;
    return each;
  });
};

export const getCategories = () => {
  return get(`${CATEGORIES_URL}.json`)
    .then(response => {
      const categories = pivot(response);
      categories.forEach(category => category.expenses = pivot(category.expenses));
      return categories;
    });
};

export const addCategory = category => {
  const url = `${CATEGORIES_URL}.json`;
  return post(url, category)
    .then(res => {
      category.key = res.name;
      return category;
    });
};

