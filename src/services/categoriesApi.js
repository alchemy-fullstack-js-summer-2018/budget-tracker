import { get, post, del, put } from './request';

const URL = 'https://react-search-e534c.firebaseio.com';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoriesUrl = key => `${CATEGORIES_URL}/${key}.json`;

const convertToArray = obj => {
  if(!obj) return [];
  return Object.keys(obj).map(key => {
    const each = obj[key];
    each.key = key;
    return each;
  });
};

export const loadCategories = () => {
  return get(`${CATEGORIES_URL}.json`)
    .then(res => {
      const categories = convertToArray(res);
      categories.forEach(category => {
        category.expenses = convertToArray(category.expenses);
      });
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

export const removeCategory = id => {
  const url = getCategoriesUrl(id);
  return del(url);
};

export const updateCategory = category => {
  const url = getCategoriesUrl(category.key);
  return put(url, category);
};

export const addExpenseToCategory = (categoryId, expense) => {
  const url = `${CATEGORIES_URL}/${categoryId}/expenses.json`;
  return post(url, expense)
    .then(res => {
      expense.key = res.name;
      return expense;
    });
};
// TODO: FIX
export const updateExpenseInCategory = (categoryId, expense) => {
  const url = `${CATEGORIES_URL}/${categoryId}/expenses/${expense.key}.json`;
  return put(url, expense)
    .then(res => {
      categoryId = res.name;
      return expense;
    });
};

export const removeExpenseInCategory = (categoryId, expenseKey) => {
  const url = `${CATEGORIES_URL}/${categoryId}/expenses/${expenseKey}.json`;
  return del(url);
};