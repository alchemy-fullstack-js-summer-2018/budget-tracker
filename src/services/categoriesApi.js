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

export const addExpenseToCategory = (categoryId, expense) => {
  const url = getCategoriesUrl(categoryId);
  return post(url, expense)
    .then(res => {
      categoryId.expense.id = res.name;
      return expense;
    });
};

export const updateExpenseInCategory = (categoryId, expense) => {
  const url = `${CATEGORIES_URL}/expenses/${categoryId}/`;
  return put(url, expense)
    .then(res => {
      categoryId = res.name;
      return expense;
    });
};

export const removeExpenseInCategory = (categoryId, expenseKey) => {
  const url = `${CATEGORIES_URL}/${categoryId}/expenses/${expenseKey}.json`;
  return del(url, expenseKey)
    .then(res => {
      categoryId = res.name;
      return expenseKey;
    });
};