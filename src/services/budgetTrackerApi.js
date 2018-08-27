import { put, post, get, del } from './request';

const URL = 'https://.firebase.com';
const CATEGORY_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORY_URL}/${key}.json`;