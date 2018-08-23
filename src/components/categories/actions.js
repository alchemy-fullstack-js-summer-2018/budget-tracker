import { CATEGORY_LOAD } from './reducers';
import data from '../../services/category-data';
// import shortid from 'shortid';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: data
});