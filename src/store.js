import { createStore } from 'redux';
import { categories } from './components/categories/reducers';

const store = createStore(
  categories
);

export default store;

