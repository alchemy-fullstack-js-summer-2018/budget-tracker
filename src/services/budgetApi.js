import { put, post, get, del } from './request';

const URL = 'https://cc-budget-tracker.firebaseio.com';
const CATEGORY_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORY_URL}/${key}.json`;

const convertToArray = obj => {
  if(!obj) return [];

  return Object.keys(obj).map(key => {
    const each = obj[key];
    each.key = key;
    return each;
  });
};

export const loadCategories = () => {
  return get(`${CATEGORY_URL}.json`)
    .then(response => {
      const categories = convertToArray(response);
      categories.forEach(category => category.expenses = convertToArray(category.expenses));
      return categories;
    });
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
  const url = getCategoryUrl(category.key);
  return put(url, category);
};

export const removeCategory = key => {
  const url = getCategoryUrl(key);
  return del(url);
};

export const addExpense = (expense) => {
  const url = `${CATEGORY_URL}/${expense.categoryId}/expenses.json`;
  return post(url, expense)
    .then(res => {
      expense.key = res.name;
      return expense;
    });
};

export const updateExpense = expense => {
  const url = `${CATEGORY_URL}/${expense.categoryId}/expenses/${expense.key}.json`;
  return put(url, expense);
};

export const removeExpense = expense => {
  const url = `${CATEGORY_URL}/${expense.categoryId}/expenses/${expense.key}.json`;
  return del(url);
};