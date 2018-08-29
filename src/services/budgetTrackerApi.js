import { put, post, get, del } from './request';

const URL = 'https://budget-tracker-61ea8.firebaseio.com';
const CATEGORY_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORY_URL}/${key}.json`;

const makeArray = obj => {
  return obj
    ? Object.keys(obj).map((key => {
      const each = obj[key];
      each.key = key;
      return each;
    }))
    : [];
};

export const getCategories = () => {
  return get(`${CATEGORY_URL}.json`)
    .then(response => {
      const categories = makeArray(response);
      categories.forEach(category => category.expenses = makeArray(category.expenses));
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

export const removeCategory = Key => {
  const url = getCategoryUrl(Key);
  return del(url);
};

export const addExpenseToCategory = (expense) => {
  const url = `${CATEGORY_URL}/${expense.categoryId}/expenses.json`;
  return post(url, expense)
    .then(res => {
      expense.key = res.name;
      return expense;
    });
};

export const updateExpenseInCategory = (categoryKey, expense) => {
  const url = `${CATEGORY_URL}/${categoryKey}/expenses/${expense.key}.json`;
  return put(url, expense)
    .then(res => {
      categoryKey = res.name;
      return expense;
    });
};

export const removeExpenseFromCategory = (categoryKey, expenseKey) => {
  const url = `${CATEGORY_URL}/${categoryKey}/expenses/${expenseKey}.json`;
  return del(url);
};
