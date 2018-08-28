import { put, post, get, del } from './request';

const URL = 'https://budget-tracker-61ea8.firebaseio.com';
const CATEGORY_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORY_URL}/${key}.json`;

export const getCategories = () => {
  return get(`${CATEGORY_URL}.json`);
};

export const addCategory = (category) => {
  const url = `${CATEGORY_URL}.json`;
  return post(url, category)
    .then(res => {
      category.key = res.name;
      return category;
    });
};

export const updateCategory = category => {
  const url = getCategoryUrl(category.id);
  return put(url, category);
};
export const removeCategory = id => {
  const url = getCategoryUrl(id);
  return del(url);
};
        