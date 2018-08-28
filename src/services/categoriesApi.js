import { post, put, get, del } from './request';

const URL = 'https://alchemy-lab-965b5.firebaseio.com';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORIES_URL}/${key}.json`;
const getExpensesUrl = key => `${CATEGORIES_URL}/${key}`;

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

export const addCategory = category => {
  const url = `${CATEGORIES_URL}.json`;
  return post(url, category)
    .then(res => {
      category.key = res.name;
      return category;
    });
};

export const addExpense = expense => {
  const url = `${getExpensesUrl(expense.categoryId)}/expenses.json`;
  return post(url, expense)
    .then(res => {
      expense.key = res.name;
      return expense;
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