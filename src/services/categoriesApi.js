import { put, post, get, del } from './request';

const URL = 'https://rbt-budget.firebaseio.com/';
const CATEGORIES_URL = `${URL}categories`;
// const EXPENSES_URL = `${CATEGORIES}/expenses`;

const getCategoryUrl = key => `${CATEGORIES_URL}/${key}.json`;
// const getExpenseUrl = key => `${EXPENSES_URL}/${key}.json`;

const convertToArray = obj => {
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
      const categories = convertToArray(response);
      categories.forEach(category => category.expenses = convertToArray(category.expenses));
      return categories;
    });
};

export const addCategory = (category) => {
  const url = `${CATEGORIES_URL}.json`;
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

export const removeCategory = Key => {
  const url = getCategoryUrl(Key);
  return del(url);
};

export const addExpenseToCategory = (expense) => {
  const url = `${CATEGORIES_URL}/${expense.categoryId}/expenses.json`;
  return post(url, expense)
    .then(res => {
      expense.key = res.name;
      return expense;
    });
};

export const updateExpenseInCategory = (categoryKey, expense) => {
  const url = `${CATEGORIES_URL}/${categoryKey}/expenses/${expense.key}.json`;
  return put(url, expense)
    .then(res => {
      categoryKey = res.name;
      return expense;
    });
};

export const removeExpenseFromCategory = (categoryKey, expenseKey) => {
  const url = `${CATEGORIES_URL}/${categoryKey}/expenses/${expenseKey}.json`;
  return del(url);
};