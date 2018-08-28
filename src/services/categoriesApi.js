import { get, post, del, put } from './request';

const URL = 'https://react-search-e534c.firebaseio.com';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoriesUrl = key => `${CATEGORIES_URL}/${key}.json`;

export const loadCategories = () => {
  return get(`${CATEGORIES_URL}.json`)
    .then(res => {
      return res
        ? Object.keys(res).map(key => {
          const each = res[key];
          each.key = key;
          return each;
        })
        : [];
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

export const removeCategory = id => {
  const url = getCategoriesUrl(id);
  return del(url);
};

export const updateCategory = category => {
  // eslint-disable-next-line
  const { key, ...copy } = category;
  const url = getCategoriesUrl(category.key);
  return put(url, copy);
};

