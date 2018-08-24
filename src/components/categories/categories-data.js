import shortid from 'shortid';

export default [
  // eslint-disable-next-line
  { key: "category1", "name": "Automobile", "budget": 800, "expenses": [{ key: `${shortid.generate()}`, "categoryId": "category1", "name": "Oil Change", "price": 49.99 }] }, 
  // eslint-disable-next-line
  { key: "category2", "name": "Food & Dining", "budget": 500, "expenses": [{ key: `${shortid.generate()}`, "categoryId": "category2", "name": "Groceries", "price": 121.14 }, { key: `${shortid.generate()}`, "categoryId": "category2", "name": "Tilt", "price": 23.50 }]},
  // eslint-disable-next-line
  { key: "category3", "name": "Entertainment", "budget": 500, "expenses": [{ key: `${shortid.generate()}`, "categoryId": "category3", "name": "Life of Riley", "price": 35 }, { key: `${shortid.generate()}`, "categoryId": "category3", "name": "Comedy Show", "price": 119.23 }, { key: `${shortid.generate()}`, "categoryId": "category3", "name": "PDX to SD", "price": 401.95 }] }
];