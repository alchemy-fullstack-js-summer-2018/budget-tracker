import { /* put, */ post, get, del } from './request';

const URL = 'https://ma-budget-tracker.firebaseio.com';
const CATEGORY_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORY_URL}/${key}.json`;

export const loadCategories = () => {
  return get(`${CATEGORY_URL}.json`)
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

export const addCategory = (category) => {
  const url = `${CATEGORY_URL}.json`;
  return post(url, category)
    .then(res => {
      category.key = res.name;
      return category;
    });
};

// TODO: update the update
// export const updateCategory = category => {
//   const url = getCategoryUrl(category.key);
//   return put(url, category);
// };

export const removeCategory = id => {
  const url = getCategoryUrl(id);
  return del(url);
};

// export const addExpense = (expense) => {
//   const url = `${CATEGORY_URL}/${expense.categoryId}/expenses.json`;
//   return post(url, expense)
//     .then(res => {
//       expense.key = res.name;
//       return expense;
//     });
// };

// export const updateExpense = expense => {
//   const url = `${CATEGORY_URL}/${expense.categoryId}/expenses/${expense.id}.json`;
//   return put(url, expense);
// };

// export const removeExpense = expense => {
//   const url = `${CATEGORY_URL}/${expense.categoryId}/expenses/${expense.id}.json`;
//   return del(url);
// };