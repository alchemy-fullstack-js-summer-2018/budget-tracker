import { put, post, get, del } from './request';

const URL = 'https://budget-tracker-61ea8.firebaseio.com';
const CATEGORY_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORY_URL}/${key}.json`;
const getExpenseUrl = key => `${CATEGORY_URL}/${key}/expenses`;

const makeArray = obj => {
  return obj
    ? Object.keys(obj).map((key => {
      const each = obj[key];
      each.id = key;
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
      category.id = res.name;
      return category;
    });
};

export const updateCategory = category => {
  const { id, ...copy } = category;
  const url = getCategoryUrl(id);
  return put(url, copy)
    .then(res => {
      res.id = id;
      return res;
    });
};


export const removeCategory = id => {
  const url = getCategoryUrl(id);
  return del(url);
};
        

export const addExpense = expense => {
  const url = `${getExpenseUrl(expense.categoryId)}.json`;
  return post(url, expense)
    .then(res => {
      expense.id = res.name;
      return expense;
    });
};

export const updateExpense = expense => {
  const { id, ...copy } = expense;
  const url = `${getExpenseUrl(copy.categoryId)}/${id}.json`;
  return put(url, copy)
    .then(res => {
      res.id = id;
      return res;
    });
};

export const removeExpense = expense => {
  const { categoryId, id } = expense;
  const url = `${getExpenseUrl(categoryId)}/${id}.json`;
  return del(url);
};