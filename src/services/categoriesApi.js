import { post, put, get, del } from './request';

const URL = 'https://alchemy-lab-965b5.firebaseio.com';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORIES_URL}/${key}.json`;
const getExpensesUrl = key => `${CATEGORIES_URL}/${key}/expenses`;

const pivot = obj => {
  if(!obj) return [];

  return Object.keys(obj).map((key => {
    const item = obj[key];
    item.key = key;
    return item;
  }));
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

export const updateCategory = category => {
  const url = getCategoryUrl(category.key);
  return put(url, category);
};

export const removeCategory = key => {
  const url = getCategoryUrl(key);
  return del(url);
};

export const addExpense = expense => {
  const expenseUrl = getExpensesUrl(expense.categoryId);
  const url = `${expenseUrl}.json`;
  return post(url, expense)
    .then(res => {
      expense.key = res.name;
      return expense;
    });
};

export const updateExpense = expense => {
  const expenseUrl = getExpensesUrl(expense.categoryId);
  const url = `${expenseUrl}.json`;
  return put(url, expense);
};