import { categories, CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './components/categories/reducers';
import { createStore, combineReducers } from 'redux';
//import { categories } from './components/categories/reducers';

const combined = combineReducers({ 
  categories, 
  expensesByCategory
});

const store = createStore(
  combined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

