import { put, post, get, del } from './request';

const URL = 'https://budget-tracker-61ea8.firebaseio.com';
const CATEGORY_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORY_URL}/${key}.json`;
const getExpenseUrl = key => `${CATEGORY_URL}/${key}/expenses`;

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


export const removeCategory = key => {
  const url = getCategoryUrl(key);
  return del(url);
};
        

export const addExpense = expense => {
  const url = `${getExpenseUrl(expense.categoryId)}.json`;
  return post(url, expense)
    .then(res => {
      expense.key = res.name;
      return expense;
    });
};

export const updateExpense = expense => {
  const expenseUrl = getExpenseUrl(expense.categoryId);
  const url = `${expenseUrl}.json`;
  return put(url, expense);
};

export const removeExpense = expense => {
  const { categoryId, key } = expense;
  const url = `${getExpenseUrl(categoryId)}/${key}.json`;
  return del(url);
};