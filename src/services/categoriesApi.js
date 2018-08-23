// import { post, get } from './request';

// const URL = 'https://cc-budget-tracker.firebaseio.com/';
// const CATEGORIES_URL = `${URL}/categories`;

// const getCategoriesUrl = key => `${CATEGORIES_URL}/${key}.json`;

// export const getCategories = () => {
//   return get(`${CATEGORIES_URL}.json`)
//     .then(response => {
//       return response
//         ? Object.keys(response).map(key => {
//           const each = response[key];
//           each.key = key;
//           return each;
//         })
//         : [];
//     });
// };

// export const addCategory = (category) => {
//   const url = `${CATEGORIES_URL}.json`;
//   return post(url, category)
//     .then(res => {
//       category.key = res.name;
//       return category;
//     });
// };

