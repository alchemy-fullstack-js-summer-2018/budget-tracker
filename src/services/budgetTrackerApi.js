import { put, post, get, del } from './request';

const URL = 'https://budget-tracker-61ea8.firebaseio.com';
const CATEGORY_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORY_URL}/${key}.json`;